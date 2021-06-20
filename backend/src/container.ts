import {readdirSync, readFileSync} from 'fs';
import {resolve} from 'path';

import glob from 'glob';
import {IocAdapter, ClassConstructor} from 'routing-controllers';

class IocContainer implements IocAdapter {
	private instances = new Map<string, unknown>()

	get<T>(someClass: ClassConstructor<T>): T {
	  return this.instances.get(someClass.name) as T;
	}

	set(name: string, instance: unknown): void {
	  this.instances.set(name, instance);
	}

	init(): IocContainer {
	  const modules = readdirSync(__dirname, {withFileTypes: true})
	      .filter((dirent) => dirent.isDirectory())
	      .map((dirent) => dirent.name);

	  for (const module of modules) {
	    glob
	        .sync(resolve(__dirname, `**/${module}/**/*.ts`))
	        .forEach((path) => {
	          const fileString = readFileSync(path).toString();
	          const regex = new RegExp(`import {Container} from './container';`);

	          if (regex.test(fileString)) require(resolve(path));
	        });
	  }

	  return this;
	}
};

export const Container = new IocContainer();
