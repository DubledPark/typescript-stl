/// <reference path="../API.ts" />

namespace std.base
{
	/**
	 * <p> An abstract container. </p>
	 * 
	 * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/abstract_containers.png" target="_blank"> 
	 * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/abstract_containers.png" style="max-width: 100%" /> 
	 * </a> </p>
	 *
	 * <h3> Container properties </h3>
	 * <dl>
	 * 	<dt> Sequence </dt>
	 * 	<dd> Elements in sequence containers are ordered in a strict linear sequence. Individual elements are 
	 *		 accessed by their position in this sequence. </dd>
	 *
	 * 	<dt> Doubly-linked list </dt>
	 *	<dd> Each element keeps information on how to locate the next and the previous elements, allowing 
	 *		 constant time insert and erase operations before or after a specific element (even of entire ranges), 
	 *		 but no direct random access. </dd>
	 * </dl>
	 *
	 * @param <T> Type of elements.
	 * 
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export abstract class Container<T>
		implements IContainer<T>
	{
		/* =========================================================
			CONSTRUCTORS & SEMI-CONSTRUCTORS
				- CONSTRUCTORS
				- ASSIGN & CLEAR
		============================================================
			CONSTURCTORS
		--------------------------------------------------------- */
		/**
		 * Default Constructor.
		 */
		protected constructor()
		{
			// THIS IS ABSTRACT CLASS
			// NOTHING TO DO ESPECIALLY
		}

		/* ---------------------------------------------------------
			ASSIGN & CLEAR
		--------------------------------------------------------- */
		/**
		 * @inheritdoc
		 */
		public abstract assign<U extends T, InputIterator extends Iterator<U>>
			(begin: InputIterator, end: InputIterator): void;

		/**
		 * @inheritdoc
		 */
		public clear(): void
		{
			this.erase(this.begin(), this.end());
		}
		
		/* ---------------------------------------------------------------
			GETTERS
		--------------------------------------------------------------- */
		/**
		 * @inheritdoc
		 */
		public abstract begin(): Iterator<T>;

		/**
		 * @inheritdoc
		 */
		public abstract end(): Iterator<T>;

		/**
		 * @inheritdoc
		 */
		public abstract rbegin(): base.IReverseIterator<T>;

		/**
		 * @inheritdoc
		 */
		public abstract rend(): base.IReverseIterator<T>;

		/**
		 * @inheritdoc
		 */
		public abstract size(): number;
		
		/**
		 * @inheritdoc
		 */
		public empty(): boolean
		{
			return this.size() == 0;
		}

		/* =========================================================
			ELEMENTS I/O
				- INSERT
				- ERASE
		============================================================
			INSERT
		--------------------------------------------------------- */
		/**
		 * @inheritdoc
		 */
		public abstract push(...items: T[]): number;

		/**
		 * @inheritdoc
		 */
		public abstract insert(position: Iterator<T>, val: T): Iterator<T>;

		/* ---------------------------------------------------------
			ERASE
		--------------------------------------------------------- */
		/**
		 * @inheritdoc
		 */
		public abstract erase(position: Iterator<T>): Iterator<T>;

		/**
		 * @inheritdoc
		 */
		public abstract erase<U extends T>(begin: Iterator<U>, end: Iterator<U>): Iterator<T>;

		/* ---------------------------------------------------------------
			UTILITIES
		--------------------------------------------------------------- */
		/**
		 * @inheritdoc
		 */
		public swap(obj: IContainer<T>): void
		{
			let supplement: Vector<T> = new Vector<T>(this.begin(), this.end());

			this.assign(obj.begin(), obj.end());
			obj.assign(supplement.begin(), supplement.end());
		}

		public abstract next(): IteratorResult<T>;

		[Symbol.iterator](): Container<T>
		{
			return this;
		}
	}
}