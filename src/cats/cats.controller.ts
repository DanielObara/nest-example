
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
	constructor(private catsService: CatsService) { }

	Providers
	Services
	Dependency injection
	Scopes
	Custom providers
	Optional providers
	Property-based injection
Provider registration
Manual instantiation
ads via Carbon
Students and Teachers, save up to 60 % on Adobe Creative Cloud.
ADS VIA CARBON
Providers
Providers are a fundamental concept in Nest.Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on.The main idea of a provider is that it can inject dependencies; this means objects can create various relationships with each other, and the function of "wiring up" instances of objects can largely be delegated to the Nest runtime system.A provider is simply a class annotated with an @Injectable() decorator.


In the previous chapter, we built a simple CatsController.Controllers should handle HTTP requests and delegate more complex tasks to providers.Providers are plain JavaScript classes with an @Injectable() decorator preceding their class declaration.

HINT
Since Nest enables the possibility to design and organize dependencies in a more OO - way, we strongly recommend following the SOLID principles.
Services#
Let's start by creating a simple CatsService. This service will be responsible for data storage and retrieval, and is designed to be used by the CatsController, so it's a good candidate to be defined as a provider.Thus, we decorate the class with @Injectable().

	cats.service.tsJS

	import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

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
HINT
To create a service using the CLI, simply execute the $ nest g service cats command.
Our CatsService is a basic class with one property and two methods.The only new feature is that it uses the @Injectable() decorator.The @Injectable() decorator attaches metadata, which tells Nest that this class is a Nest provider.By the way, this example also uses a Cat interface, which probably looks something like this:

interfaces / cat.interface.tsJS

export interface Cat {
	name: string;
	age: number;
	breed: string;
}
Now that we have a service class to retrieve cats, let's use it inside the CatsController:

cats.controller.tsJS

import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
	constructor(private catsService: CatsService) { }
	
	@Post()
	async create(@Body() createCatDto: CreateCatDto) {
		this.catsService.create(createCatDto);
	}

	@Get()
	async findAll(): Promise<Cat[]> {
		return this.catsService.findAll();
	}

}
