import { Cat } from './cats.controller';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
	
	private readonly cats: Cat[] = [];

	create(cat: Cat) {
		this.cats.push(cat);
	}

	findAll(): Cat[] {
		return this.cats;
	}
}
