import { Component, OnInit } from '@angular/core';
import { MovieDbService } from 'src/services/movie-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any[] = [];
  loading = false;
  searchTitle: string;
  constructor(private movieDbService: MovieDbService) { }

  ngOnInit() {
    this.getMovies();

  }
  async getMovies() {
    try {
      if (this.loading) { return; }
      this.loading = true;
      let res;
      if (this.searchTitle) {
        res = await this.movieDbService.getByName({ query: this.searchTitle });
      } else {
        res = await this.movieDbService.getPopularMovies();
      }
      this.movies = res.results;
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }
}
