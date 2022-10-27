import { Component, OnInit } from '@angular/core';
import { faSquare } from '@fortawesome/free-solid-svg-icons';


import { useHeader } from 'src/app/services/header/header.service';
import { GET_POSTS } from 'src/app/api/header/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faSquare = faSquare
  itemPosts: any = [];
  constructor() {
    const self = this;
    async function getData() {
      const res = await useHeader.get(GET_POSTS.posts);
      self.itemPosts = res.data;

      return self.itemPosts;
    }
    getData();
  }

  title: string = '';
  getTitle(e: any) {
    return (this.title = e.target.value);
  }

  body: string = '';
  getBody(e: any) {
    return (this.body = e.target.value);
  }

  onBlur(): void {
    console.log('da blur');
  }

  async handleCreatePost() {
    const data = {
      title: this.title,
      body: this.body,
    };
    const res = await useHeader.post(GET_POSTS.posts, data);
    this.itemPosts.push(res.data);
    console.table(this.itemPosts);
  }

  handleUpdatePost(id: number) {
    let title: any = document.querySelector('.title');
    // title = this.title
    console.log(title)
  }

  async updatePost(id: number) {
    const data = {}
    await useHeader.update(`${GET_POSTS.posts}/${id}`, data);
  }

  async deleteItem(id: any) {
    await useHeader.delete(`${GET_POSTS.posts}/${id}`);
    this.itemPosts = this.itemPosts.filter((item: any) => item.id !== id);
    return this.itemPosts;
  }

  ngOnInit(): void {}
}
