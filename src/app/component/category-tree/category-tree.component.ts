import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

interface ProductsNode {
  name: string;
  children?: ProductsNode[];
}

const TREE_DATA: ProductsNode[] =
  [
    {
      name: 'Shoes',
      children: [
        {
          name: 'Sneakers',
          children: [
            { name: 'Puma' },
            { name: 'Nike' },
          ]
        }, {
          name: 'Running Shoes',
          children: [
            { name: 'Nike' },
            { name: 'Puma' },
          ]
        },
      ]
    },
  ];

interface ProductsFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.scss']
})
export class CategoryTreeComponent implements OnInit {


  private transformer = (node: ProductsNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level,
    };
  }

  treeControl = new FlatTreeControl<ProductsFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ProductsFlatNode) => node.expandable;

  ngOnInit(): void {
  }

}


