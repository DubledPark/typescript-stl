/// <reference path="API.ts" />
// Standard Template Library: Algorithms
// The header <algorithm> defines a collection of functions especially designed to be used on ranges of elements.
//
// A range is any sequence of objects that can be accessed through iterators or pointers, such as an array or an 
// instance of some of the STL containers. Notice though, that algorithms operate through iterators directly on the 
// values, not affecting in any way the structure of any possible container (it never affects the size or storage 
// allocation of the container).
//
// @reference http://www.cplusplus.com/reference/algorithm
// @author Jeongho Nam <http://samchon.org>
var std;
(function (std) {
    /* =========================================================
        ITERATIONS (NON-MODIFYING SEQUENCE)
            - FOR_EACH
            - AGGREGATE CONDITIONS
            - FINDERS
            - COUNTERS
    ============================================================
        FOR_EACH
    --------------------------------------------------------- */
    /**
     * <p> Apply function to range. </p>
     *
     * <p> Applies function <i>fn</i> to each of the elements in the range [<i>first</i>, <i>last</i>). </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param fn Unary function that accepts an element in the range as argument. This can either be a function p
     *			 ointer or a move constructible function object. Its return value, if any, is ignored.
     */
    function for_each(first, last, fn) {
        for (let it = first; !it.equal_to(last); it = it.next())
            fn(it.value);
        return fn;
    }
    std.for_each = for_each;
    /**
     * Apply function to range.
     *
     * Applies function *fn* to each of the elements in the range [*first*, *first + n*).
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param n the number of elements to apply the function to
     * @param fn Unary function that accepts an element in the range as argument. This can either be a function p
     *			 ointer or a move constructible function object. Its return value, if any, is ignored.
     *
     * @return first + n
     */
    function for_each_n(first, n, fn) {
        for (let i = 0; i < n; i++) {
            fn(first.value);
            first = first.next();
        }
        return first;
    }
    std.for_each_n = for_each_n;
    /* ---------------------------------------------------------
        AGGREGATE CONDITIONS
    --------------------------------------------------------- */
    /**
     * <p> Test condition on all elements in range. </p>
     *
     * <p> Returns <code>true</code> if <i>pred</i> returns <code>true</code> for all the elements in the range
     * [<i>first</i>, <i>last</i>) or if the range is {@link IContainer.empty empty}, and <code>false</code> otherwise.
     * </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument and returns a value convertible to
     *			   <code>boolean</code>. The value returned indicates whether the element fulfills the condition
     *			   checked by this function. The function shall not modify its argument.
     *
     * @return <code>true</code> if pred returns true for all the elements in the range or if the range is
     *		   {@link IContainer.empty empty}, and <code>false</code> otherwise.
     */
    function all_of(first, last, pred) {
        for (let it = first; !it.equal_to(last); it = it.next())
            if (pred(it.value) == false)
                return false;
        return true;
    }
    std.all_of = all_of;
    /**
     * <p> Test if any element in range fulfills condition. </p>
     *
     * <p> Returns <code>true</code> if <i>pred</i> returns true for any of the elements in the range
     * [<i>first</i>, <i>last</i>), and <code>false</code> otherwise. </p>
     *
     * <p> If [<i>first</i>, <i>last</i>) is an {@link IContainer.empty empty} range, the function returns
     * <code>false</code>. </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument and returns a value convertible to
     *			   <code>boolean</code>. The value returned indicates whether the element fulfills the condition
     *			   checked by this function. The function shall not modify its argument.
     *
     * @return <code>true</code> if <i>pred</i> returns <code>true</code> for any of the elements in the range
     *		   [<i>first</i>, <i>last</i>), and <code>false</code> otherwise. If [<i>first</i>, <i>last</i>) is an
     *		   {@link IContainer.empty empty} range, the function returns <code>false</code>.
     */
    function any_of(first, last, pred) {
        for (let it = first; !it.equal_to(last); it = it.next())
            if (pred(it.value) == true)
                return true;
        return false;
    }
    std.any_of = any_of;
    /**
     * <p> Test if no elements fulfill condition. </p>
     *
     * <p> Returns <code>true</code> if <i>pred</i> returns false for all the elements in the range
     * [<i>first</i>, <i>last</i>) or if the range is {@link IContainer.empty empty}, and <code>false</code> otherwise.
     * </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument and returns a value convertible to
     *			   <code>boolean</code>. The value returned indicates whether the element fulfills the condition
     *			   checked by this function. The function shall not modify its argument.
     *
     * @return <code>true</code> if <i>pred</i> returns <code>false</code> for all the elements in the range
     *		   [<i>first</i>, <i>last</i>) or if the range is {@link IContainer.empty empty}, and <code>false</code>
     *		   otherwise.
     */
    function none_of(first, last, pred) {
        return !any_of(first, last, pred);
    }
    std.none_of = none_of;
    function equal(first1, last1, first2, pred = std.equal_to) {
        while (!first1.equal_to(last1))
            if (first2.equal_to(first2.get_source().end()) || !pred(first1.value, first2.value))
                return false;
            else {
                first1 = first1.next();
                first2 = first2.next();
            }
        return true;
    }
    std.equal = equal;
    function is_permutation(first1, last1, first2, pred = std.equal_to) {
        // find the mismatched
        let pair = mismatch(first1, last1, first2);
        first1 = pair.first;
        first2 = pair.second;
        if (first1.equal_to(last1))
            return true;
        let last2 = first2.advance(std.distance(first1, last1));
        for (let it = first1; !it.equal_to(last1); it = it.next())
            if (find(first1, it, it.value).equal_to(it)) {
                let n = count(first2, last2, it.value);
                if (n == 0 || count(it, last1, it.value) != n)
                    return false;
            }
        return true;
    }
    std.is_permutation = is_permutation;
    function lexicographical_compare(first1, last1, first2, last2, compare = std.less) {
        while (!first1.equal_to(last1))
            if (first2.equal_to(last2) || !compare(first1.value, first2.value))
                return false;
            else if (compare(first1.value, first2.value))
                return true;
            else {
                first1 = first1.next();
                first2 = first2.next();
            }
        return !std.equal_to(last2, last2.get_source().end()) && !std.equal_to(first2.value, last2.value);
    }
    std.lexicographical_compare = lexicographical_compare;
    /* ---------------------------------------------------------
        FINDERS
    --------------------------------------------------------- */
    /**
     * <p> Find value in range. </p>
     *
     * <p> Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) that compares equal to
     * <i>val</i>. If no such element is found, the function returns <i>last</i>. </p>
     *
     * <p> The function uses {@link equal_to equal_to} to compare the individual elements to <i>val</i>. </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param val Value to search for in the range.
     *
     * @return An {@link Iterator} to the first element in the range that compares equal to <i>val</i>. If no elements
     *		   match, the function returns <i>last</i>.
     */
    function find(first, last, val) {
        for (let it = first; !it.equal_to(last); it = it.next())
            if (std.equal_to(it.value, val))
                return it;
        return last;
    }
    std.find = find;
    /**
     * <p> Find element in range. </p>
     *
     * <p> Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) for which pred returns
     * <code>true</code>. If no such element is found, the function returns <i>last</i>. </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument and returns a value convertible
     *			   to <code>bool</code>. The value returned indicates whether the element is considered a match in
     *			   the context of this function. The function shall not modify its argument.
     *
     * @return An {@link Iterator} to the first element in the range for which <i>pred</i> does not return
     *		   <code>false</code>. If <i>pred</i> is <code>false</code> for all elements, the function returns
     *		   <i>last</i>.
     */
    function find_if(first, last, pred) {
        for (let it = first; !it.equal_to(last); it = it.next())
            if (pred(it.value))
                return it;
        return last;
    }
    std.find_if = find_if;
    /**
     * <p> Find element in range. </p>
     *
     * <p> Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) for which pred returns
     * <code>true</code>. If no such element is found, the function returns <i>last</i>. </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument and returns a value convertible
     *			   to <code>bool</code>. The value returned indicates whether the element is considered a match in
     *			   the context of this function. The function shall not modify its argument.
     *
     * @return An {@link Iterator} to the first element in the range for which <i>pred</i> returns <code>false</code>.
     *		   If <i>pred</i> is <code>true</code> for all elements, the function returns <i>last</i>.
     */
    function find_if_not(first, last, pred) {
        for (let it = first; !it.equal_to(last); it = it.next())
            if (pred(it.value) == false)
                return it;
        return last;
    }
    std.find_if_not = find_if_not;
    function find_end(first1, last1, first2, last2, compare = std.equal_to) {
        if (first2.equal_to(last2))
            return last1;
        let ret = last1;
        for (; !first1.equal_to(last1); first1 = first1.next()) {
            let it1 = first1;
            let it2 = first2;
            while (std.equal_to(it1.value, it2.value)) {
                it1 = it1.next();
                it2 = it2.next();
                if (it2.equal_to(last2)) {
                    ret = first1;
                    break;
                }
                else if (it1.equal_to(last1))
                    return ret;
            }
        }
        return ret;
    }
    std.find_end = find_end;
    function find_first_of(first1, last1, first2, last2, pred = std.equal_to) {
        for (; !first1.equal_to(last1); first1 = first1.next())
            for (let it = first2; !it.equal_to(last2); it = it.next())
                if (pred(it.value, first1.value))
                    return first1;
        return last1;
    }
    std.find_first_of = find_first_of;
    function adjacent_find(first, last, pred = std.equal_to) {
        if (!first.equal_to(last)) {
            let next = first.next();
            while (!next.equal_to(last)) {
                if (std.equal_to(first.value, last.value))
                    return first;
                first = first.next();
                next = next.next();
            }
        }
        return last;
    }
    std.adjacent_find = adjacent_find;
    function search(first1, last1, first2, last2, pred = std.equal_to) {
        if (first2.equal_to(last2))
            return first1;
        for (; !first1.equal_to(last1); first1 = first1.next()) {
            let it1 = first1;
            let it2 = first2;
            while (std.equal_to(it1.value, it2.value)) {
                it1 = it1.next();
                it2 = it2.next();
                if (it2.equal_to(last2))
                    return first1;
                else if (it1.equal_to(last1))
                    return last1;
            }
        }
        return last1;
    }
    std.search = search;
    function search_n(first, last, count, val, pred = std.equal_to) {
        let limit = first.advance(std.distance(first, last) - count);
        for (; !first.equal_to(limit); first = first.next()) {
            let it = first;
            let i = 0;
            while (std.equal_to(it.value, val)) {
                it = it.next();
                if (++i == count)
                    return first;
            }
        }
        return last;
    }
    std.search_n = search_n;
    function mismatch(first1, last1, first2, compare = std.equal_to) {
        while (!first1.equal_to(last1) && !first2.equal_to(first2.get_source().end())
            && std.equal_to(first1.value, first2.value)) {
            first1 = first1.next();
            first2 = first2.next();
        }
        return std.make_pair(first1, first2);
    }
    std.mismatch = mismatch;
    /* ---------------------------------------------------------
        COUNTERS
    --------------------------------------------------------- */
    /**
     * <p> Count appearances of value in range. </p>
     *
     * <p> Returns the number of elements in the range [<i>first</i>, <i>last</i>) that compare equal to <i>val</i>. </p>
     *
     * <p> The function uses {@link equal_to} to compare the individual elements to <i>val</i>. </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param val Value to match.
     *
     * @return The number of elements in the range [<i>first</i>, <i>last</i>) that compare equal to <i>val</i>.
     */
    function count(first, last, val) {
        let cnt = 0;
        for (let it = first; !it.equal_to(last); it = it.next())
            if (std.equal_to(it.value, val))
                cnt++;
        return cnt;
    }
    std.count = count;
    /**
     * <p> Return number of elements in range satisfying condition. </p>
     *
     * <p> Returns the number of elements in the range [<i>first</i>, <i>last</i>) for which pred is <code>true</code>.
     * </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible
     *			   to <code>bool</code>. The value returned indicates whether the element is counted by this function.
     *			   The function shall not modify its argument. This can either be a function pointer or a function
     *			   object.
     */
    function count_if(first, last, pred) {
        let cnt = 0;
        for (let it = first; !it.equal_to(last); it = it.next())
            if (pred(it.value))
                cnt++;
        return cnt;
    }
    std.count_if = count_if;
})(std || (std = {}));
var std;
(function (std) {
    /* =========================================================
        MODIFIERS (MODIFYING SEQUENCE)
            - FILL
            - REMOVE
            - REPLACE & SWAP
            - RE-ARRANGEMENT
    ============================================================
        FILL
    --------------------------------------------------------- */
    /**
     * <p> Copy range of elements. </p>
     *
     * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) into the range beginning at <i>result</i>. </p>
     *
     * <p> The function returns an iterator to the end of the destination range (which points to the element following the
     * last element copied). </p>
     *
     * <p> The ranges shall not overlap in such a way that result points to an element in the range
     * [<i>first</i>, <i>last</i>). For such cases, see {@link copy_backward}. </p>
     *
     * @param first {@link Iterator Input iterator} to the initial position in a sequence to be copied.
     * @param last {@link Iterator Input iterator} to the initial position in a sequence to be copied. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output iterator} to the initial position in the destination sequence. This shall not
     *				 point to any element in the range [<i>first</i>, <i>last</i>).
     *
     * @return An iterator to the end of the destination range where elements have been copied.
     */
    function copy(first, last, result) {
        for (; !first.equal_to(last); first = first.next()) {
            result.value = first.value;
            result = result.next();
        }
        return result;
    }
    std.copy = copy;
    /**
     * <p> Copy elements. </p>
     *
     * <p> Copies the first <i>n</i> elements from the range beginning at <i>first</i> into the range beginning at
     * <i>result</i>. </p>
     *
     * <p> The function returns an iterator to the end of the destination range (which points to one past the last element
     * copied). </p>
     *
     * <p> If <i>n</i> is negative, the function does nothing. </p>
     *
     * <p> If the ranges overlap, some of the elements in the range pointed by result may have undefined but valid values.
     * </p>
     *
     * @param first {@link Iterator Input iterator} to the initial position in a sequence of at least <i>n</i> elements to
     *				be copied. <i>InputIterator</i> shall point to a type assignable to the elements pointed by
     *				<i>OutputIterator</i>.
     * @param n Number of elements to copy. If this value is negative, the function does nothing.
     * @param result {@link Iterator Output iterator} to the initial position in the destination sequence of at least
     *				 <i>n</i> elements. This shall not point to any element in the range [<i>first</i>, last].
     *
     * @return An iterator to the end of the destination range where elements have been copied.
     */
    function copy_n(first, n, result) {
        for (let i = 0; i < n; i++) {
            result.value = first.value;
            first = first.next();
            result = result.next();
        }
        return result;
    }
    std.copy_n = copy_n;
    /**
     * <p> Copy certain elements of range. </p>
     *
     * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) for which pred returns <code>true</code> to the
     * range beginning at <i>result</i>. </p>
     *
     * @param first {@link Iterator Input iterator} to the initial position in a sequence to be copied.
     * @param last {@link Iterator Input iterator} to the initial position in a sequence to be copied. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output iterator} to the initial position in the destination sequence. This shall not
     *				 point to any element in the range [<i>first</i>, <i>last</i>).
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element is to be copied (if
     *			   <code>true</code>, it is copied). The function shall not modify any of its arguments.
     *
     * @return An iterator to the end of the destination range where elements have been copied.
     */
    function copy_if(first, last, result, pred) {
        for (; !first.equal_to(last); first = first.next()) {
            if (!pred(first.value))
                continue;
            result.value = first.value;
            result = result.next();
        }
        return result;
    }
    std.copy_if = copy_if;
    /**
     * <p> Copy range of elements backward. </p>
     *
     * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) starting from the end into the range terminating
     * at <i>result</i>. </p>
     *
     * <p> The function returns an iterator to the first element in the destination range. </p>
     *
     * <p> The resulting range has the elements in the exact same order as [<i>first</i>, <i>last</i>). To reverse their
     * order, see {@link reverse_copy}. </p>
     *
     * <p> The function begins by copying <code>*(last-1)</code> into <code>*(result-1)</code>, and then follows backward
     * by the elements preceding these, until <i>first</i> is reached (and including it). </p>
     *
     * <p> The ranges shall not overlap in such a way that <i>result</i> (which is the <i>past-the-end element</i> in the
     * destination range) points to an element in the range (first,last]. For such cases, see {@link copy}. </p>
     *
     * @param first {@link Iterator Bidirectional iterator} to the initial position in a sequence to be copied.
     * @param last {@link Iterator Bidirectional iterator} to the initial position in a sequence to be copied. The range
     *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Bidirectional iterator} to the initial position in the destination sequence. This
     *				 shall not point to any element in the range [<i>first</i>, <i>last</i>).
     *
     * @return An iterator to the first element of the destination sequence where elements have been copied.
     */
    function copy_backward(first, last, result) {
        last = last.prev();
        for (; !last.equal_to(first); last = last.prev()) {
            result.value = last.value;
            result = result.prev();
        }
        return result;
    }
    std.copy_backward = copy_backward;
    /**
     * <p> Fill range with value. </p>
     *
     * <p> Assigns val to all the elements in the range [<i>first</i>, <i>last</i>). </p>
     *
     * @param first {@link Iterator Forward iterator} to the initial position in a sequence of elements that support being
     *				assigned a value of type <i>T</i>.
     * @param last {@link Iterator Forward iterator} to the final position in a sequence of elements that support being
     *				assigned a value of type <i>T</i>.. The range filled is [<i>first</i>, <i>last</i>), which contains
     *				all the elements between <i>first</i> and <i>last</i>, including the element pointed by <i>first</i>
     *				but not the element pointed by <i>last</i>.
     * @param val Value to assign to the elements in the filled range.
     */
    function fill(first, last, val) {
        for (; !first.equal_to(last); first = first.next())
            first.value = val;
    }
    std.fill = fill;
    /**
     * <p> Fill sequence with value. </p>
     *
     * <p> Assigns <i>val</i> to the first <i>n</i> elements of the sequence pointed by <i>first</i>. </p>
     *
     * @param first {@link Iterator Output iterator} to the initial position in a sequence of elements that support being
     *				assigned a value of type <i>T</i>.
     * @param n Number of elements to fill. If negative, the function does nothing.
     * @param val Value to be used to fill the range.
     *
     * @return An iterator pointing to the element that follows the last element filled.
     */
    function fill_n(first, n, val) {
        for (let i = 0; i < n; i++) {
            first.value = val;
            first = first.next();
        }
        return first;
    }
    std.fill_n = fill_n;
    function transform(...args) {
        if (args.length == 4)
            return unary_transform.apply(null, args);
        else
            return binary_transform.apply(null, args);
    }
    std.transform = transform;
    /**
     * @hidden
     */
    function unary_transform(first, last, result, op) {
        for (; !first.equal_to(last); first = first.next()) {
            result.value = op(first.value);
            result = result.next();
        }
        return result;
    }
    /**
     * @hidden
     */
    function binary_transform(first1, last1, first2, result, binary_op) {
        while (!first1.equal_to(last1)) {
            result.value = binary_op(first1.value, first2.value);
            first1 = first1.next();
            first2 = first2.next();
            result = result.next();
        }
        return result;
    }
    /**
     * <p> Generate values for range with function. </p>
     *
     * <p> Assigns the value returned by successive calls to gen to the elements in the range [<i>first</i>, <i>last</i>).
     * </p>
     *
     * @param first {@link Iterator Forward iterator} to the initial position in a sequence.
     * @param last {@link Iterator Forward iterator} to the final position in a sequence. The range affected is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param gen Generator function that is called with no arguments and returns some value of a type convertible to
     *			  those pointed by the iterators.
     */
    function generate(first, last, gen) {
        for (; !first.equal_to(last); first = first.next())
            first.value = gen();
    }
    std.generate = generate;
    /**
     * <p> Generate values for sequence with function. </p>
     *
     * <p> Assigns the value returned by successive calls to <i>gen</i> to the first <i>n</i> elements of the sequence
     * pointed by <i>first</i>. </p>
     *
     * @param first {@link Iterator Output iterator} to the initial position in a sequence of at least <i>n</i> elements
     *				that support being assigned a value of the type returned by <i>gen</i>.
     * @param n Number of values to generate. If negative, the function does nothing.
     * @param gen Generator function that is called with no arguments and returns some value of a type convertible to
     *			  those pointed by the iterators.
     *
     * @return An iterator pointing to the element that follows the last element whose value has been generated.
     */
    function generate_n(first, n, gen) {
        for (let i = 0; i < n; i++) {
            first.value = gen();
            first = first.next();
        }
        return first;
    }
    std.generate_n = generate_n;
    function unique(first, last, pred = std.equal_to) {
        let ret = first;
        for (let it = first.next(); !it.equal_to(last);) {
            if (std.equal_to(it.value, it.prev().value) == true)
                it = it.get_source().erase(it);
            else {
                ret = it;
                it = it.next();
            }
        }
        return ret;
    }
    std.unique = unique;
    function unique_copy(first, last, result, pred = std.equal_to) {
        if (first.equal_to(last))
            return result;
        result.value = first.value;
        first = first.next();
        for (; !first.equal_to(last); first = first.next())
            if (!pred(first.value, result.value)) {
                result = result.next();
                result.value = first.value;
            }
        return result;
    }
    std.unique_copy = unique_copy;
    /**
     * <p> Remove value from range. </p>
     *
     * <p> Transforms the range [<i>first</i>, <i>last</i>) into a range with all the elements that compare equal to
     * <i>val</i> removed, and returns an iterator to the new last of that range. </p>
     *
     * <p> The function cannot alter the properties of the object containing the range of elements (i.e., it cannot alter
     * the size of an array or a container): The removal is done by replacing the elements that compare equal to
     * <i>val</i> by the next element that does not, and signaling the new size of the shortened range by returning an
     * iterator to the element that should be considered its new past-the-last element. </p>
     *
     * <p> The relative order of the elements not removed is preserved, while the elements between the returned iterator
     * and last are left in a valid but unspecified state. </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param val Value to be removed.
     */
    function remove(first, last, val) {
        let ret = last;
        for (let it = first; !it.equal_to(last);) {
            if (std.equal_to(it.value, val) == true)
                it = it.get_source().erase(it);
            else {
                ret = it;
                it = it.next();
            }
        }
        return ret;
    }
    std.remove = remove;
    /**
     * <p> Remove elements from range. </p>
     *
     * <p> Transforms the range [<i>first</i>, <i>last</i>) into a range with all the elements for which pred returns
     * <code>true</code> removed, and returns an iterator to the new last of that range. </p>
     *
     * <p> The function cannot alter the properties of the object containing the range of elements (i.e., it cannot
     * alter the size of an array or a container): The removal is done by replacing the elements for which pred returns
     * <code>true</code> by the next element for which it does not, and signaling the new size of the shortened range
     * by returning an iterator to the element that should be considered its new past-the-last element. </p>
     *
     * <p> The relative order of the elements not removed is preserved, while the elements between the returned
     * iterator and last are left in a valid but unspecified state. </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element is to be removed (if
     *			   <code>true</code>, it is removed). The function shall not modify its argument.
     */
    function remove_if(first, last, pred) {
        let ret = last;
        for (let it = first; !it.equal_to(last);) {
            if (pred(it.value) == true)
                it = it.get_source().erase(it);
            else {
                ret = it;
                it = it.next();
            }
        }
        return ret;
    }
    std.remove_if = remove_if;
    /**
     * <p> Copy range removing value. </p>
     *
     * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, except
     * those elements that compare equal to <i>val</i>. </p>
     *
     * <p> The resulting range is shorter than [<i>first</i>, <i>last</i>) by as many elements as matches in the sequence,
     * which are "removed". </p>
     *
     * <p> The function uses {@link equal_to} to compare the individual elements to <i>val</i>. </p>
     *
     * @param first {@link Iterator InputIterator} to the initial position in a sequence.
     * @param last {@link Iterator InputIterator} to the final position in a sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element in the range
     *				 [<i>first</i>, <i>last</i>).
     * @param val Value to be removed.
     *
     * @return An iterator pointing to the end of the copied range, which includes all the elements in
     *		   [<i>first</i>, <i>last</i>) except those that compare equal to <i>val</i>.
     */
    function remove_copy(first, last, result, val) {
        for (; !first.equal_to(last); first = first.next()) {
            if (std.equal_to(first.value, val))
                continue;
            result.value = first.value;
            result = result.next();
        }
        return result;
    }
    std.remove_copy = remove_copy;
    /**
     * <p> Copy range removing values. </p>
     *
     * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, except
     * those elements for which <i>pred</i> returns <code>true</code>. </p>
     *
     * <p> The resulting range is shorter than [<i>first</i>, <i>last</i>) by as many elements as matches, which are
     * "removed". </p>
     *
     * @param first {@link Iterator InputIterator} to the initial position in a sequence.
     * @param last {@link Iterator InputIterator} to the final position in a sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element in the range
     *				 [<i>first</i>, <i>last</i>).
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element is to be removed from the copy (if
     *			   <code>true</code>, it is not copied). The function shall not modify its argument.
     *
     * @return An iterator pointing to the end of the copied range, which includes all the elements in
     *		   [<i>first</i>, <i>last</i>) except those for which <i>pred</i> returns <code>true</code>.
     */
    function remove_copy_if(first, last, result, pred) {
        for (; !first.equal_to(last); first = first.next()) {
            if (pred(first.value))
                continue;
            result.value = first.value;
            result = result.next();
        }
        return result;
    }
    std.remove_copy_if = remove_copy_if;
    /* ---------------------------------------------------------
        REPLACE & SWAP
    --------------------------------------------------------- */
    /**
     * <p> Replace value in range. </p>
     *
     * <p> Assigns <i>new_val</i> to all the elements in the range [<i>first</i>, <i>last</i>) that compare equal to
     * <i>old_val</i>. </p>
     *
     * <p> The function uses {@link equal_to} to compare the individual elements to old_val. </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param old_val Value to be replaced.
     * @param new_val Replacement value.
     */
    function replace(first, last, old_val, new_val) {
        for (let it = first; !it.equal_to(last); it = it.next())
            if (std.equal_to(it.value, old_val))
                it.value = new_val;
    }
    std.replace = replace;
    /**
     * <p> Replace value in range. </p>
     *
     * <p> Assigns <i>new_val</i> to all the elements in the range [<i>first</i>, <i>last</i>) for which pred returns
     * <code>true</code>. </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element is to be replaced (if
     *			   <code>true</code>, it is replaced). The function shall not modify its argument.
     * @param new_val Value to assign to replaced elements.
     */
    function replace_if(first, last, pred, new_val) {
        for (let it = first; !it.equal_to(last); it = it.next())
            if (pred(it.value) == true)
                it.value = new_val;
    }
    std.replace_if = replace_if;
    /**
     * <p> Copy range replacing value. </p>
     *
     * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, replacing
     * the appearances of <i>old_value</i> by <i>new_value</i>. </p>
     *
     * <p> The function uses {@link std.equal_to} to compare the individual elements to <i>old_value</i>. </p>
     *
     * <p> The ranges shall not overlap in such a way that result points to an element in the range
     * [<i>first</i>, <i>last</i>). </p>
     *
     * @param first {@link Iterator InputIterator} to the initial position in a sequence.
     * @param last {@link Iterator InputIterator} to the final position in a sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element in the range
     *				 [<i>first</i>, <i>last</i>).
     * @param old_val Value to be replaced.
     * @param new_val Replacement value.
     *
     * @return An iterator pointing to the element that follows the last element written in the result sequence.
     */
    function replace_copy(first, last, result, old_val, new_val) {
        for (; !first.equal_to(last); first = first.next()) {
            if (std.equal_to(first.value, old_val))
                result.value = new_val;
            else
                result.value = first.value;
            result = result.next();
        }
        return result;
    }
    std.replace_copy = replace_copy;
    /**
     * <p> Copy range replacing value. </p>
     *
     * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, replacing
     * those for which <i>pred</i> returns <code>true</code> by <i>new_value</i>. </p>
     *
     * @param first {@link Iterator InputIterator} to the initial position in a sequence.
     * @param last {@link Iterator InputIterator} to the final position in a sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
     *				 stored. The pointed type shall support being assigned the value of an element in the range
     *				 [<i>first</i>, <i>last</i>).
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element is to be removed from the copy (if
     *			   <code>true</code>, it is not copied). The function shall not modify its argument.
     * @param new_val Value to assign to replaced values.
     *
     * @return An iterator pointing to the element that follows the last element written in the result sequence.
     */
    function replace_copy_if(first, last, result, pred, new_val) {
        for (; !first.equal_to(last); first = first.next()) {
            if (pred(first.value))
                result.value = new_val;
            else
                result.value = first.value;
            result = result.next();
        }
        return result;
    }
    std.replace_copy_if = replace_copy_if;
    /**
     * <p> Exchange values of objects pointed to by two iterators. </p>
     *
     * <p> Swaps the elements pointed to by <i>x</i> and <i>y</i>. </p>
     *
     * <p> The function calls {@link Iterator.swap} to exchange the elements. </p>
     *
     * @param x {@link Iterator Forward iterator} to the objects to swap.
     * @param y {@link Iterator Forward iterator} to the objects to swap.
     */
    function iter_swap(x, y) {
        x.swap(y);
    }
    std.iter_swap = iter_swap;
    /**
     * <p> Exchange values of two ranges. </p>
     *
     * <p> Exchanges the values of each of the elements in the range [<i>first1</i>, <i>last1</i>) with those of their
     * respective elements in the range beginning at <i>first2</i>. </p>
     *
     * <p> The function calls {@link Iterator.swap} to exchange the elements. </p>
     *
     * @param first1 {@link Iterator Forward iterator} to the initial position of the first sequence.
     * @param last1 {@link Iterator Forward iterator} to the final position of the first sequence. The range used is
     *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
     *				pointed by <i>last1</i>.
     * @param first2 {@link Iterator Forward iterator} to the initial position of the second range. The range includes as
     *				 many elements as [<i>first1</i>, <i>last1</i>). The two ranges shall not overlap.
     *
     * @return An iterator to the last element swapped in the second sequence.
     */
    function swap_ranges(first1, last1, first2) {
        for (; !first1.equal_to(last1); first1 = first1.next()) {
            first1.swap(first2);
            first2 = first2.next();
        }
        return first2;
    }
    std.swap_ranges = swap_ranges;
    /* ---------------------------------------------------------
        RE-ARRANGEMENT
    --------------------------------------------------------- */
    /**
     * <p> Reverse range. </p>
     *
     * <p> Reverses the order of the elements in the range [<i>first</i>, <i>last</i>). </p>
     *
     * <p> The function calls {@link iter_swap} to swap the elements to their new locations. </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     */
    function reverse(first, last) {
        // first != last && first != --last
        while (first.equal_to(last) == false && first.equal_to((last = last.prev())) == false) {
            first.swap(last);
            first = first.next();
        }
    }
    std.reverse = reverse;
    /**
     * <p> Copy range reversed. </p>
     *
     * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, but in
     * reverse order. </p>
     *
     * @param first {@link Iterator Bidirectional iterator} to the initial position in a sequence to be copied.
     * @param last {@link Iterator Bidirectional iterator} to the initial position in a sequence to be copied. The range
     *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result {@link Iterator Output iterator} to the initial position of the range where the reserved range is
     *				 stored. The pointed type shall support being assigned the value of an element in the range
     *				 [<i>first</i>, <i>last</i>).
     *
     * @return An output iterator pointing to the end of the copied range, which contains the same elements in reverse
     *		   order.
     */
    function reverse_copy(first, last, result) {
        while (!last.equal_to(first)) {
            last = last.prev();
            result.value = last.value;
            result = result.next();
        }
        return result;
    }
    std.reverse_copy = reverse_copy;
    /**
     * <p> Rotate left the elements in range. </p>
     *
     * <p> Rotates the order of the elements in the range [<i>first</i>, <i>last</i>), in such a way that the element
     * pointed by middle becomes the new first element. </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param middle An {@link Iterator} pointing to the element within the range [<i>first</i>, <i>last</i>) that is
     *				 moved to the first position in the range.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     *
     * @return An iterator pointing to the element that now contains the value previously pointed by <i>first</i>.
     */
    function rotate(first, middle, last) {
        let next = middle;
        while (next.equal_to(last) == false) {
            first.swap(next);
            first = first.next();
            next = next.next();
            if (first.equal_to(middle))
                break;
        }
        return first;
    }
    std.rotate = rotate;
    /**
     * <p> Copy range rotated left. </p>
     *
     * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, but
     * rotating the order of the elements in such a way that the element pointed by <i>middle</i> becomes the first
     * element in the resulting range. </p>
     *
     * @param first {@link Iterator Forward iterator} to the initial position of the range to be copy-rotated.
     * @param middle Forward iterator pointing to the element within the range [<i>first</i>, <i>last</i>) that is copied as the first element in the resulting range.
     * @param last {@link Iterator Forward iterator} to the final positions of the range to be copy-rotated. The range
     *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     *			   Notice that in this function, these are not consecutive parameters, but the first and <b>third</b> ones.
     * @param result {@link Iterator Output iterator} to the initial position of the range where the reserved range is
     *				 stored. The pointed type shall support being assigned the value of an element in the range
     *				 [<i>first</i>, <i>last</i>).
     *
     * @return An output iterator pointing to the end of the copied range.
     */
    function rotate_copy(first, middle, last, result) {
        result = copy(middle, last, result);
        return copy(first, middle, result);
    }
    std.rotate_copy = rotate_copy;
    /**
     * <p> Randomly rearrange elements in range. </p>
     *
     * <p> Rearranges the elements in the range [<i>first</i>, <i>last</i>) randomly. </p>
     *
     * <p> The function swaps the value of each element with that of some other randomly picked element. When provided,
     * the function gen determines which element is picked in every case. Otherwise, the function uses some unspecified
     * source of randomness. </p>
     *
     * <p> To specify a uniform random generator, see {@link shuffle}. </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     */
    function random_shuffle(first, last) {
        return std.shuffle(first, last);
    }
    std.random_shuffle = random_shuffle;
    /**
     * <p> Randomly rearrange elements in range using generator. </p>
     *
     * <p> Rearranges the elements in the range [<i>first</i>, <i>last</i>) randomly, using <i>g</i> as uniform random
     * number generator. </p>
     *
     * <p> The function swaps the value of each element with that of some other randomly picked element. The function
     * determines the element picked by calling <i>g()</i>. </p>
     *
     * <p> To shuffle the elements of the range without such a generator, see {@link random_shuffle} instead. </p>
     *
     * <h5> Note </h5>
     * <p> Using random generator engine is not implemented yet. </p>
     *
     * @param first An {@link Iterator} to the initial position in a sequence.
     * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
     *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
     *			  <i>first</i> but not the element pointed by <i>last</i>.
     */
    function shuffle(first, last) {
        for (let it = first; !it.equal_to(last); it = it.next()) {
            let rand_index = Math.floor(Math.random() * (last.index - first.index));
            it.swap(first.advance(rand_index));
        }
    }
    std.shuffle = shuffle;
})(std || (std = {}));
var std;
(function (std) {
    function sort(first, last, compare = std.less) {
        qsort(first.get_source(), first.index, last.index - 1, compare);
    }
    std.sort = sort;
    function partial_sort(first, middle, last, compare = std.less) {
        selection_sort(first.get_source(), first.index, middle.index, last.index, compare);
    }
    std.partial_sort = partial_sort;
    function partial_sort_copy(first, last, result_first, result_last, compare = std.less) {
        let input_size = std.distance(first, last);
        let result_size = std.distance(result_first, result_last);
        let vector = new std.Vector(first, last);
        sort(vector.begin(), vector.end());
        if (input_size > result_size)
            result_first = std.copy(vector.begin(), vector.begin().advance(result_size), result_first);
        else
            result_first = std.copy(vector.begin(), vector.end(), result_first);
        return result_first;
    }
    std.partial_sort_copy = partial_sort_copy;
    function is_sorted(first, last, compare = std.equal_to) {
        if (first.equal_to(last))
            return true;
        for (let next = first.next(); !next.equal_to(last); next = next.next()) {
            if (std.less(next.value, first.value))
                return false;
            first = first.next();
        }
        return true;
    }
    std.is_sorted = is_sorted;
    function is_sorted_until(first, last, compare = std.equal_to) {
        if (first.equal_to(last))
            return first;
        for (let next = first.next(); !next.equal_to(last); next = next.next()) {
            if (std.less(next.value, first.value))
                return next;
            first = first.next();
        }
        return last;
    }
    std.is_sorted_until = is_sorted_until;
    /* ---------------------------------------------------------
        BACKGROUND
    --------------------------------------------------------- */
    /**
     * @hidden
     */
    function qsort(container, first, last, compare) {
        if (last == -2)
            last = container.size() - 1;
        if (first >= last)
            return;
        let index = qsort_partition(container, first, last, compare);
        qsort(container, first, index - 1, compare);
        qsort(container, index + 1, last, compare);
    }
    /**
     * @hidden
     */
    function qsort_partition(container, first, last, compare) {
        let standard = container.at(first);
        let i = first;
        let j = last + 1;
        while (true) {
            while (compare(container.at(++i), standard))
                if (i == last)
                    break;
            while (compare(standard, container.at(--j)))
                if (j == first)
                    break;
            if (i >= j)
                break;
            // SWAP; AT(I) WITH AT(J)
            let supplement = container.at(i);
            container.set(i, container.at(j));
            container.set(j, supplement);
        }
        // SWAP; AT(BEGIN) WITH AT(J)
        let supplement = container.at(first);
        container.set(first, container.at(j));
        container.set(j, supplement);
        return j;
    }
    /**
     * @hidden
     */
    function stable_qsort(container, first, last, compare) {
        // QUICK SORT
        if (last == -2)
            last = container.size() - 1;
        else if (first >= last)
            return;
        let index = stable_qsort_partition(container, first, last, compare);
        stable_qsort(container, first, index - 1, compare);
        stable_qsort(container, index + 1, last, compare);
    }
    /**
     * @hidden
     */
    function stable_qsort_partition(container, first, last, compare) {
        let val = container.at(first);
        let i = first;
        let j = last + 1;
        while (true) {
            while (!std.equal_to(container.at(++i), val) && compare(container.at(i), val))
                if (i == last - 1)
                    break;
            while (!std.equal_to(val, container.at(--j)) && compare(val, container.at(j)))
                if (j == first)
                    break;
            if (i >= j)
                break;
            // SWAP; AT(I) WITH AT(J)
            let supplement = container.at(i);
            container.set(i, container.at(j));
            container.set(j, supplement);
        }
        // SWAP; AT(BEGIN) WITH AT(J)
        let supplement = container.at(first);
        container.set(first, container.at(j));
        container.set(j, supplement);
        return j;
    }
    /**
     * @hidden
     */
    function selection_sort(container, first, middle, last, compare) {
        if (last == -1)
            last = container.size();
        for (let i = first; i < middle; i++) {
            let min_index = i;
            for (let j = i + 1; j < last; j++)
                if (compare(container.at(j), container.at(min_index)))
                    min_index = j;
            if (i != min_index) {
                let supplement = container.at(i);
                container.set(i, container.at(min_index));
                container.set(min_index, supplement);
            }
        }
    }
})(std || (std = {}));
var std;
(function (std) {
    function make_heap(first, last, compare = std.less) {
        let heap_compare = function (x, y) {
            return !compare(x, y);
        };
        std.sort(first, last, heap_compare);
    }
    std.make_heap = make_heap;
    function push_heap(first, last, compare = std.less) {
        let last_item_it = last.prev();
        let less_it = null;
        for (let it = first; !it.equal_to(last_item_it); it = it.next()) {
            if (compare(it.value, last_item_it.value)) {
                less_it = it;
                break;
            }
        }
        if (less_it != null) {
            let container = last_item_it.get_source();
            container.insert(less_it, last_item_it.value);
            container.erase(last_item_it);
        }
    }
    std.push_heap = push_heap;
    function pop_heap(first, last, compare = std.less) {
        let container = first.get_source();
        container.insert(last, first.value);
        container.erase(first);
    }
    std.pop_heap = pop_heap;
    function is_heap(first, last, compare = std.less) {
        let it = std.is_heap_until(first, last, compare);
        return it.equal_to(last);
    }
    std.is_heap = is_heap;
    function is_heap_until(first, last, compare = std.less) {
        let prev = first;
        for (let it = first.next(); !it.equal_to(last); it = it.next()) {
            if (compare(prev.value, it.value) == true)
                return it;
            prev = it;
        }
        return last;
    }
    std.is_heap_until = is_heap_until;
    function sort_heap(first, last, compare = std.less) {
        std.sort(first, last, compare);
    }
    std.sort_heap = sort_heap;
})(std || (std = {}));
var std;
(function (std) {
    function lower_bound(first, last, val, compare = std.less) {
        let count = std.distance(first, last);
        while (count > 0) {
            let step = Math.floor(count / 2);
            let it = first.advance(step);
            if (!compare(it.value, val)) {
                first = it.next();
                count -= step + 1;
            }
            else
                count = step;
        }
        return first;
    }
    std.lower_bound = lower_bound;
    function upper_bound(first, last, val, compare = std.less) {
        let count = std.distance(first, last);
        while (count > 0) {
            let step = Math.floor(count / 2);
            let it = first.advance(step);
            if (!compare(val, it.value)) {
                first = it.next();
                count -= step + 1;
            }
            else
                count = step;
        }
        return first;
    }
    std.upper_bound = upper_bound;
    function equal_range(first, last, val, compare = std.less) {
        let it = lower_bound(first, last, val, compare);
        return std.make_pair(it, upper_bound(it, last, val, compare));
    }
    std.equal_range = equal_range;
    function binary_search(first, last, val, compare = std.less) {
        first = lower_bound(first, last, val, compare);
        return !first.equal_to(last) && !compare(val, first.value);
    }
    std.binary_search = binary_search;
})(std || (std = {}));
var std;
(function (std) {
    /* =========================================================
        PARTITION
    ========================================================= */
    /**
     * <p> Test whether range is partitioned. </p>
     *
     * <p> Returns <code>true</code> if all the elements in the range [<i>first</i>, <i>last</i>) for which <i>pred</i>
     * returns <code>true</code> precede those for which it returns <code>false</code>. </p>
     *
     * <p> If the range is {@link IContainer.empty empty}, the function returns <code>true</code>. </p>
     *
     * @param first {@link Iterator Input iterator} to the initial position of the sequence.
     * @param last {@link Iterator Input iterator} to the final position of the sequence. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element belongs to the first group (if
     *			   <code>true</code>, the element is expected before all the elements for which it returns
     *			   <code>false</code>). The function shall not modify its argument.
     *
     * @return <code>true</code> if all the elements in the range [<i>first</i>, <i>last</i>) for which <i>pred</i> returns
     *		   <code>true</code> precede those for which it returns <code>false</code>. Otherwise it returns
     *		   <code>false</code>. If the range is {@link IContainer.empty empty}, the function returns <code>true</code>.
     */
    function is_partitioned(first, last, pred) {
        while (!first.equal_to(last) && pred(first.value))
            first = first.next();
        for (; !first.equal_to(last); first = first.next())
            if (pred(first.value))
                return false;
        return true;
    }
    std.is_partitioned = is_partitioned;
    /**
     * <p> Partition range in two. </p>
     *
     * <p> Rearranges the elements from the range [<i>first</i>, <i>last</i>), in such a way that all the elements for
     * which <i>pred</i> returns <code>true</code> precede all those for which it returns <code>false</code>. The iterator
     * returned points to the first element of the second group. </p>
     *
     * <p> The relative ordering within each group is not necessarily the same as before the call. See
     * {@link stable_partition} for a function with a similar behavior but with stable ordering within each group. </p>
     *
     * @param first {@link Iterator Forward iterator} to the initial position of the sequence to partition.
     * @param last {@link Iterator Forward iterator} to the final position of the sequence to partition. The range used is
     *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
     *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element belongs to the first group (if
     *			   <code>true</code>, the element is expected before all the elements for which it returns
     *			   <code>false</code>). The function shall not modify its argument.
     *
     * @return An iterator that points to the first element of the second group of elements (those for which <i>pred</i>
     *		   returns <code>false</code>), or <i>last</i> if this group is {@link IContainer.empty empty}.
     */
    function partition(first, last, pred) {
        while (!first.equal_to(last)) {
            while (pred(first.value)) {
                first = first.next();
                if (first.equal_to(last))
                    return first;
            }
            do {
                last = last.prev();
                if (first.equal_to(last))
                    return first;
            } while (!pred(last.value));
            first.swap(last);
            first = first.next();
        }
        return last;
    }
    std.partition = partition;
    /**
     * <p> Partition range in two - stable ordering. </p>
     *
     * <p> Rearranges the elements in the range [<i>first</i>, <i>last</i>), in such a way that all the elements for which
     * <i>pred</i> returns <code>true</code> precede all those for which it returns <code>false</code>, and, unlike
     * function {@link partition}, the relative order of elements within each group is preserved. </p>
     *
     * <p> This is generally implemented using an internal temporary buffer. </p>
     *
     * @param first {@link Iterator Bidirectional iterator} to the initial position of the sequence to partition.
     * @param last {@link Iterator Bidirectional iterator} to the final position of the sequence to partition. The range
     *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element belongs to the first group (if
     *			   <code>true</code>, the element is expected before all the elements for which it returns
     *			   <code>false</code>). The function shall not modify its argument.
     *
     * @return An iterator that points to the first element of the second group of elements (those for which <i>pred</i>
     *		   returns <code>false</code>), or <i>last</i> if this group is {@link IContainer.empty empty}.
     */
    function stable_partition(first, last, pred) {
        return partition(first, last, pred);
    }
    std.stable_partition = stable_partition;
    /**
     * <p> Partition range into two. </p>
     *
     * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) for which <i>pred</i> returns <code>true</code>
     * into the range pointed by <i>result_true</i>, and those for which it does not into the range pointed by
     * <i>result_false</i>. </p>
     *
     * @param first {@link Iterator Input iterator} to the initial position of the range to be copy-partitioned.
     * @param last {@link Iterator Input iterator} to the final position of the range to be copy-partitioned. The range
     *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
     *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param result_true {@link Iterator Output iterator} to the initial position of the range where the elements for
     *					  which <i>pred</i> returns <code>true</code> are stored.
     * @param result_false {@link Iterator Output iterator} to the initial position of the range where the elements for
     *					   which <i>pred</i> returns <code>false</code> are stored.
     * @param pred Unary function that accepts an element pointed by <i>InputIterator</i> as argument, and returns a value
     *			   convertible to <code>bool</code>. The value returned indicates on which result range the element is
     *			   copied. The function shall not modify its argument.
     *
     * @return A {@link Pair} of iterators with the end of the generated sequences pointed by <i>result_true</i> and
     *		   <i>result_false</i>, respectivelly. Its member {@link Pair.first first} points to the element that follows
     *		   the last element copied to the sequence of elements for which <i>pred</i> returned <code>true</code>. Its
     *		   member {@link Pair.second second} points to the element that follows the last element copied to the sequence
     *		   of elements for which <i>pred</i> returned <code>false</code>.
     */
    function partition_copy(first, last, result_true, result_false, pred) {
        for (; !first.equal_to(last); first = first.next())
            if (pred(first.value)) {
                result_true.value = first.value;
                result_true = result_true.next();
            }
            else {
                result_false.value = first.value;
                result_false = result_false.next();
            }
        return std.make_pair(result_true, result_false);
    }
    std.partition_copy = partition_copy;
    /**
     * <p> Get partition point. </p>
     *
     * <p> Returns an iterator to the first element in the partitioned range [<i>first</i>, <i>last</i>) for which
     * <i>pred</i> is not <code>true</code>, indicating its partition point. </p>
     *
     * <p> The elements in the range shall already {@link is_partitioned be partitioned}, as if {@link partition} had been
     * called with the same arguments. </p>
     *
     * <p> The function optimizes the number of comparisons performed by comparing non-consecutive elements of the sorted
     * range, which is specially efficient for {@link Iteartor random-access iterators}. </p>
     *
     * @param first {@link Iterator Forward iterator} to the initial position of the partitioned sequence.
     * @param last {@link Iterator Forward iterator} to the final position of the partitioned sequence. The range checked
     *		  is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> an <i>last</i>,
     *		  including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
     * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
     *			   <code>bool</code>. The value returned indicates whether the element goes before the partition point (if
     *			   <code>true</code>, it goes before; if <code>false</code> goes at or after it). The function shall not
     *			   modify its argument.
     *
     * @return An iterator to the first element in the partitioned range [<i>first</i>, <i>last</i>) for which <i>pred</i>
     *		   is not <code>true</code>, or <i>last</i> if it is not <code>true</code> for any element.
     */
    function partition_point(first, last, pred) {
        let n = std.distance(first, last);
        while (n > 0) {
            let step = Math.floor(n / 2);
            let it = first.advance(step);
            if (pred(it.value)) {
                first = it.next();
                n -= step + 1;
            }
            else
                n = step;
        }
        return first;
    }
    std.partition_point = partition_point;
})(std || (std = {}));
var std;
(function (std) {
    function merge(first1, last1, first2, last2, result, compare = std.less) {
        while (true) {
            if (first1.equal_to(last1))
                return std.copy(first2, last2, result);
            else if (first2.equal_to(last2))
                return std.copy(first1, last1, result);
            if (compare(first1.value, first2.value)) {
                result.value = first1.value;
                first1 = first1.next();
            }
            else {
                result.value = first2.value;
                first2 = first2.next();
            }
            result = result.next();
        }
    }
    std.merge = merge;
    function inplace_merge(first, middle, last, compare = std.less) {
        let vector = new std.Vector(std.distance(first, last), null);
        merge(first, middle, middle, last, vector.begin());
        std.copy(vector.begin(), vector.end(), first);
    }
    std.inplace_merge = inplace_merge;
    function includes(first1, last1, first2, last2, compare = std.less) {
        while (!first2.equal_to(last2)) {
            if (first1.equal_to(last2) || compare(first2.value, first1.value))
                return false;
            else if (!compare(first1.value, first2.value))
                first2 = first2.next();
            first1 = first1.next();
        }
        return true;
    }
    std.includes = includes;
    function set_union(first1, last1, first2, last2, result, compare = std.less) {
        while (true) {
            if (first1.equal_to(last1))
                return std.copy(first2, last2, result);
            else if (first2.equal_to(last2))
                return std.copy(first1, last1, result);
            if (compare(first1.value, first2.value)) {
                result.value = first1.value;
                first1 = first1.next();
            }
            else if (compare(first2.value, first1.value)) {
                result.value = first2.value;
                first2 = first2.next();
            }
            else {
                result.value = first1.value;
                first1 = first1.next();
                first2 = first2.next();
            }
            result = result.next();
        }
    }
    std.set_union = set_union;
    function set_intersection(first1, last1, first2, last2, result, compare = std.less) {
        while (true) {
            if (first1.equal_to(last1))
                return std.copy(first2, last2, result);
            else if (first2.equal_to(last2))
                return std.copy(first1, last1, result);
            if (compare(first1.value, first2.value))
                first1 = first1.next();
            else if (compare(first2.value, first1.value))
                first2 = first2.next();
            else {
                result.value = first1.value;
                result = result.next();
                first1 = first1.next();
                first2 = first2.next();
            }
        }
    }
    std.set_intersection = set_intersection;
    function set_difference(first1, last1, first2, last2, result, compare = std.less) {
        while (!first1.equal_to(last1) && !first2.equal_to(last2))
            if (std.less(first1.value, first2.value)) {
                result.value = first1.value;
                result = result.next();
                first1 = first1.next();
            }
            else if (std.less(first2.value, first1.value))
                first2 = first2.next();
            else {
                first1 = first1.next();
                first2 = first2.next();
            }
        return std.copy(first1, last1, result);
    }
    std.set_difference = set_difference;
    function set_symmetric_difference(first1, last1, first2, last2, result, compare = std.less) {
        while (true) {
            if (first1.equal_to(last1))
                return std.copy(first2, last2, result);
            else if (first2.equal_to(last2))
                return std.copy(first1, last1, result);
            if (compare(first1.value, first2.value)) {
                result.value = first1.value;
                result = result.next();
                first1 = first1.next();
            }
            else if (compare(first2.value, first1.value)) {
                result.value = first2.value;
                result = result.next();
                first2 = first2.next();
            }
            else {
                first1 = first1.next();
                first2 = first2.next();
            }
        }
    }
    std.set_symmetric_difference = set_symmetric_difference;
})(std || (std = {}));
var std;
(function (std) {
    /* =========================================================
        MIN & MAX
            - VARADIC PARAMETERS
            - ITERATORS
    ============================================================
        VARADIC PARAMETERS
    --------------------------------------------------------- */
    /**
     * <p> Return the smallest. </p>
     *
     * <p> Returns the smallest of all the elements in the <i>args</i>. </p>
     *
     * @param args Values to compare.
     *
     * @return The lesser of the values passed as arguments.
     */
    function min(...args) {
        let minimum = args[0];
        for (let i = 1; i < args.length; i++)
            if (std.less(args[i], minimum))
                minimum = args[i];
        return minimum;
    }
    std.min = min;
    /**
     * <p> Return the largest. </p>
     *
     * <p> Returns the largest of all the elements in the <i>args</i>. </p>
     *
     * @param args Values to compare.
     *
     * @return The largest of the values passed as arguments.
     */
    function max(...args) {
        let maximum = args[0];
        for (let i = 1; i < args.length; i++)
            if (std.greater(args[i], maximum))
                maximum = args[i];
        return maximum;
    }
    std.max = max;
    /**
     * <p> Return smallest and largest elements. </p>
     *
     * <p> Returns a {@link Pair} with the smallest of all the elements in the <i>args</i> as first element (the first of
     * them, if there are more than one), and the largest as second (the last of them, if there are more than one). </p>
     *
     * @param args Values to compare.
     *
     * @return The lesser and greatest of the values passed as arguments.
     */
    function minmax(...args) {
        let minimum = args[0];
        let maximum = args[0];
        for (let i = 1; i < args.length; i++) {
            if (std.less(args[i], minimum))
                minimum = args[i];
            if (std.greater(args[i], maximum))
                maximum = args[i];
        }
        return std.make_pair(minimum, maximum);
    }
    std.minmax = minmax;
    function min_element(first, last, compare = std.less) {
        let smallest = first;
        first = first.next();
        for (; !first.equal_to(last); first = first.next())
            if (compare(first.value, smallest.value))
                smallest = first;
        return smallest;
    }
    std.min_element = min_element;
    function max_element(first, last, compare = std.greater) {
        let largest = first;
        first = first.next();
        for (; !first.equal_to(last); first = first.next())
            if (compare(first.value, largest.value))
                largest = first;
        return largest;
    }
    std.max_element = max_element;
    function minmax_element(first, last, compare = std.greater) {
        let smallest = first;
        let largest = first;
        first = first.next();
        for (; !first.equal_to(last); first = first.next()) {
            if (compare(first.value, smallest.value))
                smallest = first;
            if (!compare(first.value, largest.value))
                largest = first;
        }
        return std.make_pair(smallest, largest);
    }
    std.minmax_element = minmax_element;
})(std || (std = {}));
/// <reference path="../API.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
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
        class Container {
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
            constructor() {
                // THIS IS ABSTRACT CLASS
                // NOTHING TO DO ESPECIALLY
            }
            /**
             * @inheritdoc
             */
            clear() {
                this.erase(this.begin(), this.end());
            }
            /**
             * @inheritdoc
             */
            empty() {
                return this.size() == 0;
            }
            /* ---------------------------------------------------------------
                UTILITIES
            --------------------------------------------------------------- */
            /**
             * @inheritdoc
             */
            swap(obj) {
                let supplement = new std.Vector(this.begin(), this.end());
                this.assign(obj.begin(), obj.end());
                obj.assign(supplement.begin(), supplement.end());
            }
            [Symbol.iterator]() {
                return this;
            }
        }
        base.Container = Container;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="API.ts" />
// Iterator definitions.
//
// @reference http://www.cplusplus.com/reference/iterator
// @author Jeongho Nam <http://samchon.org>
var std;
(function (std) {
    /**
     * <p> Bi-directional iterator. </p>
     *
     * <p> {@link Iterator Bidirectional iterators} are iterators that can be used to access the sequence of elements
     * in a range in both directions (towards the end and towards the beginning). </p>
     *
     * <p> All {@link IArrayIterator random-access iterators} are also valid {@link Iterrator bidirectional iterators}.
     * </p>
     *
     * <p> There is not a single type of {@link Iterator bidirectional iterator}: {@link IContainer Each container}
     * may define its own specific iterator type able to iterate through it and access its elements. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/abstract_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/abstract_containers.png" style="max-width: 100%" /></a>
     * </p>
     *
     * @reference http://www.cplusplus.com/reference/iterator/BidirectionalIterator
     * @author Jeongho Nam <http://samchon.org>
     */
    class Iterator {
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        /**
         * Construct from the source {@link IContainer container}.
         *
         * @param source The source container.
         */
        constructor(source) {
            this.source_ = source;
        }
        /**
         * Advances the {@link Iterator} by <i>n</i> element positions.
         *
         * @param n Number of element positions to advance.
         * @return An advanced iterator.
         */
        advance(n) {
            let it = this;
            let i;
            if (n >= 0) {
                for (i = 0; i < n; i++)
                    if (it.equal_to(this.source_.end()))
                        return this.source_.end();
                    else
                        it = it.next();
            }
            else {
                n = n * -1;
                for (i = 0; i < n; i++)
                    if (it.equal_to(this.source_.end()))
                        return this.source_.end();
                    else
                        it = it.prev();
            }
            return it;
        }
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * Get source
         */
        get_source() {
            return this.source_;
        }
        /**
         * <p> Whether an iterator is equal with the iterator. </p>
         *
         * <p> Compare two iterators and returns whether they are equal or not. </p>
         *
         * <h4> Note </h4>
         * <p> Iterator's equal_to() only compare souce container and index number. </p>
         *
         * <p> Although elements in a pair, key and value are equal_to, if the source map or
         * index number is different, then the {@link equal_to equal_to()} will return false. If you want to
         * compare the elements of a pair, compare them directly by yourself. </p>
         *
         * @param obj An iterator to compare
         * @return Indicates whether equal or not.
         */
        equal_to(obj) {
            return this.source_ == obj.source_;
        }
        /**
         * <p> Get value of the iterator is pointing. </p>
         *
         * @return A value of the iterator.
         */
        get value() { } // TS2.0 New Feature
    }
    std.Iterator = Iterator;
})(std || (std = {}));
var std;
(function (std) {
    /**
     * <p> This class reverses the direction in which a bidirectional or random-access iterator iterates through a range.
     * </p>
     *
     * <p> A copy of the original iterator (the {@link Iterator base iterator}) is kept internally and used to reflect
     * the operations performed on the {@link ReverseIterator}: whenever the {@link ReverseIterator} is incremented, its
     * {@link Iterator base iterator} is decreased, and vice versa. A copy of the {@link Iterator base iterator} with the
     * current state can be obtained at any time by calling member {@link base}. </p>
     *
     * <p> Notice however that when an iterator is reversed, the reversed version does not point to the same element in
     * the range, but to <b>the one preceding it</b>. This is so, in order to arrange for the past-the-end element of a
     * range: An iterator pointing to a past-the-end element in a range, when reversed, is pointing to the last element
     * (not past it) of the range (this would be the first element of the reversed range). And if an iterator to the
     * first element in a range is reversed, the reversed iterator points to the element before the first element (this
     * would be the past-the-end element of the reversed range). </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/abstract_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/abstract_containers.png" style="max-width: 100%" /></a>
     * </p>
     *
     * @reference http://www.cplusplus.com/reference/iterator/reverse_iterator
     * @author Jeongho Nam <http://samchon.org>
     */
    class ReverseIterator extends std.Iterator {
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        /**
         * Construct from base iterator.
         *
         * @param base A reference of the base iterator, which iterates in the opposite direction.
         */
        constructor(base) {
            if (base == null)
                super(null);
            else {
                super(base.get_source());
                this.base_ = base.prev();
            }
        }
        /**
         * <p> Return base iterator. </p>
         *
         * <p> Return a reference of the base iteraotr. </p>
         *
         * <p> The base iterator is an iterator of the same type as the one used to construct the {@link ReverseIterator},
         * but pointing to the element next to the one the {@link ReverseIterator} is currently pointing to
         * (a {@link ReverseIterator} has always an offset of -1 with respect to its base iterator).
         *
         * @return A reference of the base iterator, which iterates in the opposite direction.
         */
        base() {
            return this.base_.next();
        }
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * <p> Get value of the iterator is pointing. </p>
         *
         * @return A value of the reverse iterator.
         */
        get value() {
            return this.base_.value;
        }
        /* ---------------------------------------------------------
            MOVERS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        prev() {
            return this._Create_neighbor(this.base().next());
        }
        /**
         * @inheritdoc
         */
        next() {
            return this._Create_neighbor(this.base().prev());
        }
        /**
         * @inheritdoc
         */
        advance(n) {
            return this._Create_neighbor(this.base().advance(-n));
        }
        /* ---------------------------------------------------------
            COMPARES
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        equal_to(obj) {
            return this.base_.equal_to(obj.base_);
        }
        /**
         * @inheritdoc
         */
        swap(obj) {
            this.base_.swap(obj.base_);
        }
    }
    std.ReverseIterator = ReverseIterator;
    /* =========================================================
        GLOBAL FUNCTIONS
            - MOVERS
            - BEGIN
            - END
    ============================================================
        MOVERS
    --------------------------------------------------------- */
    /**
     * <p> Return distance between {@link Iterator iterators}. </p>
     *
     * <p> Calculates the number of elements between <i>first</i> and <i>last</i>. </p>
     *
     * <p> If it is a {@link IArrayIterator random-access iterator}, the function uses operator- to calculate this.
     * Otherwise, the function uses the increase operator {@link Iterator.next next()} repeatedly. </p>
     *
     * @param first Iterator pointing to the initial element.
     * @param last Iterator pointing to the final element. This must be reachable from first.
     *
     * @return The number of elements between first and last.
     */
    function distance(first, last) {
        if (first.index != undefined) {
            // WHEN IARRAY_ITERATOR
            // ABS FOR REVERSE_ITERATOR
            return Math.abs(last.index - first.index);
        }
        let length = 0;
        for (; !first.equal_to(last); first = first.next())
            length++;
        return length;
    }
    std.distance = distance;
    /**
     * <p> Advance iterator. </p>
     *
     * <p> Advances the iterator <i>it</i> by <i>n</i> elements positions. </p>
     *
     * @param it Iterator to be advanced.
     * @param n Number of element positions to advance.
     *
     * @return An iterator to the element <i>n</i> positions before <i>it</i>.
     */
    function advance(it, n) {
        return it.advance(n);
    }
    std.advance = advance;
    /**
     * <p> Get iterator to previous element. </p>
     *
     * <p> Returns an iterator pointing to the element that <i>it</i> would be pointing to if advanced <i>-n</i> positions. </p>
     *
     * @param it Iterator to base position.
     * @param n Number of element positions offset (1 by default).
     *
     * @return An iterator to the element <i>n</i> positions before <i>it</i>.
     */
    function prev(it, n = 1) {
        return it.advance(n);
    }
    std.prev = prev;
    /**
     * <p> Get iterator to next element. </p>
     *
     * <p> Returns an iterator pointing to the element that <i>it</i> would be pointing to if advanced <i>n</i> positions. </p>
     *
     * @param it Iterator to base position.
     * @param n Number of element positions offset (1 by default).
     *
     * @return An iterator to the element <i>n</i> positions away from <i>it</i>.
     */
    function next(it, n = 1) {
        return it.advance(n);
    }
    std.next = next;
    // typedef is not specified in TypeScript yet.
    // Instead, I listed all the containers and its iterators as overloaded functions
    function begin(container) {
        return container.begin();
    }
    std.begin = begin;
    // typedef is not specified in TypeScript yet.
    // Instead, I listed all the containers and its iterators as overloaded functions
    function end(container) {
        return container.end();
    }
    std.end = end;
})(std || (std = {}));
/// <reference path="../API.ts" />
/// <reference path="Container.ts" />
/// <reference path="../Iterator.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * An abstract list.
         *
         * <p> {@link ListContainer}s are sequence containers that allow constant time insert and erase operations anywhere
         * within the sequence, and iteration in both directions. </p>
         *
         * <p> List containers are implemented as doubly-linked lists; Doubly linked lists can store each of the elements they
         * contain in different and unrelated storage locations. The ordering is kept internally by the association to each
         * element of a link to the element preceding it and a link to the element following it. </p>
         *
         * <p> Compared to other base standard sequence containers (array, vector and deque), lists perform generally better
         * in inserting, extracting and moving elements in any position within the container for which an iterator has already
         * been obtained, and therefore also in algorithms that make intensive use of these, like sorting algorithms. </p>
         *
         * <p> The main drawback of lists and forward_lists compared to these other sequence containers is that they lack
         * direct access to the elements by their position; For example, to access the sixth element in a list, one has to
         * iterate from a known position (like the beginning or the end) to that position, which takes linear time in the
         * distance between these. They also consume some extra memory to keep the linking information associated to each
         * element (which may be an important factor for large lists of small-sized elements). </p>
         *
         * <h3> Container properties </h3>
         * <dl>
         * 	<dt> Sequence </dt>
         * 	<dd> Elements in sequence containers are ordered in a strict linear sequence. Individual elements are accessed by
         *		 their position in this sequence. </dd>
         *
         * 	<dt> Doubly-linked list </dt>
         *	<dd> Each element keeps information on how to locate the next and the previous elements, allowing constant time
         *		 insert and erase operations before or after a specific element (even of entire ranges), but no direct random
         *		 access. </dd>
         * </dl>
         *
         * @param <T> Type of the elements.
         *
         * @reference http://www.cplusplus.com/reference/list/list/
         *
         * @author Jeongho Nam <http://samchon.org>
         */
        class ListContainer extends base.Container {
            /* ---------------------------------------------------------
                CONSTRUCTORS
            --------------------------------------------------------- */
            /**
             * Default Constructor.
             */
            constructor() {
                super();
                // INIT MEMBERS
                this.end_ = this._Create_iterator(null, null, null);
                this.end_["prev_"] = this.end_;
                this.end_["next_"] = this.end_;
                this.begin_ = this.end_;
                this.size_ = 0;
                // "FOR OF" ITERATOR
                this.it_ = this.end_;
            }
            /**
             * @inheritdoc
             */
            assign(first, last) {
                this.clear();
                this.insert(this.end(), first, last);
            }
            /**
             * @inheritdoc
             */
            clear() {
                // DISCONNECT NODES
                this.begin_ = this.end_;
                this.end_["prev_"] = (this.end_);
                this.end_["next_"] = (this.end_);
                // RE-SIZE -> 0
                this.size_ = 0;
            }
            /* ---------------------------------------------------------
                ACCESSORS
            --------------------------------------------------------- */
            /**
             * @inheritdoc
             */
            begin() {
                return this.begin_;
            }
            /**
             * @inheritdoc
             */
            end() {
                return this.end_;
            }
            /**
             * @inheritdoc
             */
            size() {
                return this.size_;
            }
            /**
             * @inheritdoc
             */
            front() {
                return this.begin_.value;
            }
            /**
             * @inheritdoc
             */
            back() {
                return this.end_.prev().value;
            }
            /**
             * @inheritdoc
             */
            next() {
                this.it_ = this.it_.next();
                if (this.it_ == this.end_)
                    return { done: true, value: undefined };
                else
                    return { done: false, value: this.it_.value };
            }
            /* =========================================================
                ELEMENTS I/O
                    - PUSH & POP
                    - INSERT
                    - ERASE
                    - POST-PROCESS
            ============================================================
                PUSH & POP
            --------------------------------------------------------- */
            /**
             * @inheritdoc
             */
            push_front(val) {
                this.insert(this.begin_, val);
            }
            /**
             * @inheritdoc
             */
            push_back(val) {
                this.insert(this.end_, val);
            }
            /**
             * @inheritdoc
             */
            pop_front() {
                this.erase(this.begin_);
            }
            /**
             * @inheritdoc
             */
            pop_back() {
                this.erase(this.end_.prev());
            }
            /* ---------------------------------------------------------
                INSERT
            --------------------------------------------------------- */
            /**
             * @inheritdoc
             */
            push(...items) {
                let prev = this.end().prev();
                let first = null;
                for (let i = 0; i < items.length; i++) {
                    // CONSTRUCT ITEM, THE NEW ELEMENT
                    let item = this._Create_iterator(prev, null, items[i]);
                    if (i == 0)
                        first = item;
                    prev["next_"] = (item);
                    prev = item;
                }
                // IF WAS EMPTY, VAL IS THE BEGIN
                if (this.empty() == true || first.prev().equal_to(this.end()) == true)
                    this.begin_ = first;
                // CONNECT BETWEEN LAST INSERTED ITEM AND POSITION
                prev["next_"] = (this.end_);
                this.end_["prev_"] = (prev);
                this.size_ += items.length;
                return this.size();
            }
            insert(...args) {
                let ret;
                // BRANCHES
                if (args.length == 2)
                    ret = this.insert_by_val(args[0], args[1]);
                else if (args.length == 3 && typeof args[1] == "number")
                    ret = this._Insert_by_repeating_val(args[0], args[1], args[2]);
                else
                    ret = this._Insert_by_range(args[0], args[1], args[2]);
                // RETURNS
                return ret;
            }
            /**
             * @hidden
             */
            insert_by_val(position, val) {
                // SHIFT TO INSERT OF THE REPEATING VAL
                return this._Insert_by_repeating_val(position, 1, val);
            }
            /**
             * @hidden
             */
            _Insert_by_repeating_val(position, size, val) {
                // INVALID ITERATOR
                if (this != position["source_"])
                    throw new std.InvalidArgument("Parametric iterator is not this container's own.");
                let prev = position.prev();
                let first = null;
                for (let i = 0; i < size; i++) {
                    // CONSTRUCT ITEM, THE NEW ELEMENT
                    let item = this._Create_iterator(prev, null, val);
                    if (i == 0)
                        first = item;
                    prev["next_"] = (item);
                    // SHIFT ITEM LEFT TO BE PREV
                    prev = item;
                }
                // IF WAS EMPTY, VAL IS THE BEGIN
                if (this.empty() == true || first.prev().equal_to(this.end()) == true)
                    this.begin_ = first;
                // CONNECT BETWEEN LAST INSERTED ITEM AND POSITION
                prev["next_"] = (position);
                position["prev_"] = (prev);
                this.size_ += size;
                return first;
            }
            /**
             * @hidden
             */
            _Insert_by_range(position, begin, end) {
                // INVALID ITERATOR
                if (this != position["source_"])
                    throw new std.InvalidArgument("Parametric iterator is not this container's own.");
                let prev = position.prev();
                let first = null;
                let size = 0;
                for (let it = begin; it.equal_to(end) == false; it = it.next()) {
                    // CONSTRUCT ITEM, THE NEW ELEMENT
                    let item = this._Create_iterator(prev, null, it.value);
                    if (size == 0)
                        first = item;
                    if (prev != null)
                        prev["next_"] = (item);
                    // SHIFT CURRENT ITEM TO PREVIOUS
                    prev = item;
                    size++;
                }
                // IF WAS EMPTY, FIRST ELEMENT IS THE BEGIN
                if (this.empty() == true)
                    this.begin_ = first;
                // CONNECT BETWEEN LAST AND POSITION
                prev["next_"] = (position);
                position["prev_"] = (prev);
                this.size_ += size;
                return first;
            }
            erase(first, last = first.next()) {
                return this._Erase_by_range(first, last);
            }
            /**
             * @hidden
             */
            _Erase_by_range(first, last) {
                // FIND PREV AND NEXT
                let prev = first.prev();
                // CALCULATE THE SIZE
                let size = std.distance(first, last);
                // SHRINK
                prev["next_"] = (last);
                last["prev_"] = (prev);
                this.size_ -= size;
                if (first == this.begin_)
                    this.begin_ = last;
                return last;
            }
            swap(obj) {
                if (obj instanceof ListContainer) {
                    [this.begin_, obj.begin_] = [obj.begin_, this.begin_];
                    [this.end_, obj.end_] = [obj.end_, this.end_];
                    [this.size_, obj.size_] = [obj.size_, this.size_];
                }
                else
                    super.swap(obj);
            }
        }
        base.ListContainer = ListContainer;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * An iterator, node of a List-based container.
         *
         * <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" target="_blank">
         *	<img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" />
         * </a>
         *
         * @author Jeongho Nam <http://samchon.org>
         */
        class ListIteratorBase extends std.Iterator {
            /**
             * Initializer Constructor.
             *
             * @param source The source {@link Container} to reference.
             * @param prev A refenrece of previous node ({@link ListIterator iterator}).
             * @param next A refenrece of next node ({@link ListIterator iterator}).
             * @param value Value to be stored in the node (iterator).
             */
            constructor(source, prev, next, value) {
                super(source);
                this.prev_ = prev;
                this.next_ = next;
                this.value_ = value;
            }
            /* ---------------------------------------------------------------
                ACCESSORS
            --------------------------------------------------------------- */
            /**
             * @inheritdoc
             */
            prev() {
                return this.prev_;
            }
            /**
             * @inheritdoc
             */
            next() {
                return this.next_;
            }
            /**
             * @inheritdoc
             */
            advance(step) {
                let it = this;
                if (step >= 0) {
                    for (let i = 0; i < step; i++) {
                        it = it.next();
                        if (it.equal_to(this.source_.end()))
                            return it;
                    }
                }
                else {
                    for (let i = 0; i < step; i++) {
                        it = it.prev();
                        if (it.equal_to(this.source_.end()))
                            return it;
                    }
                }
                return it;
            }
            /**
             * @inheritdoc
             */
            get value() {
                return this.value_;
            }
            /* ---------------------------------------------------------------
                COMPARISON
            --------------------------------------------------------------- */
            /**
             * @inheritdoc
             */
            equal_to(obj) {
                return this == obj;
            }
            /**
             * @inheritdoc
             */
            swap(obj) {
                let source = this.source_;
                let supp_prev = this.prev_;
                let supp_next = this.next_;
                this.prev_ = obj.prev_;
                this.next_ = obj.next_;
                obj.prev_ = supp_prev;
                obj.next_ = supp_next;
                if (source.end() == this)
                    source["end_"] = obj;
                else if (source.end() == obj)
                    source["end_"] = this;
                if (source.begin() == this)
                    source["begin_"] = obj;
                else if (source.begin() == obj)
                    source["begin_"] = this;
            }
        }
        base.ListIteratorBase = ListIteratorBase;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * <p> Red-black Tree. </p>
         *
         * <p> A red-black tree is a kind of self-balancing
         * binary search tree. Each node of the binary tree has an extra bit, and that bit is often interpreted as the
         * color (<font color='red'>red</font> or <font color='darkBlue'>black</font>) of the node. These color bits
         * are used to ensure the tree remains approximately balanced during insertions and deletions. </p>
         *
         * <p> Balance is preserved by painting each node of the tree with one of two colors (typically called
         * '<font color='red'>red</font>' and '<font color='darkBlue'>black</font>') in a way that satisfies certain
         * properties, which collectively constrain how unbalanced the tree can become in the worst case. When the tree
         * is modified, the new tree is subsequently rearranged and repainted to restore the coloring properties. The
         * properties are designed in such a way that this rearranging and recoloring can be performed efficiently. </p>
         *
         * <p> The balancing of the tree is not perfect but it is good enough to allow it to guarantee searching in
         * O(log n) time, where n is the total number of elements in the tree. The insertion and deletion operations,
         * along with the tree rearrangement and recoloring, are also performed in O(log n) time. </p>
         *
         * <p> Tracking the color of each node requires only 1 bit of information per node because there are only two
         * colors. The tree does not contain any other data specific to its being a
         * red-black tree so its memory footprint is almost
         * identical to a classic (uncolored) binary search tree. In many cases the additional bit of information can
         * be stored at no additional memory cost. </p>
         *
         * <h4> Properties </h4>
         * <p> In addition to the requirements imposed on a binary search tree the following must be satisfied by a
         * red-black tree: </p>
         *
         * <ol>
         *	<li> A node is either <font color='red'>red</font> or <font color='darkBlue'>black</font>. </li>
         *	<li>
         *		The root is <font color='darkBlue'>black</font>. This rule is sometimes omitted. Since the root can
         *		always be changed from <font color='red'>red</font> to <font color='darkBlue'>black</font>, but not
         *		necessarily vice versa, this rule has little effect on analysis.
         *	</li>
         *	<li> All leaves (NIL; <code>null</code>) are <font color='darkBlue'>black</font>. </li>
         *  <li>
         *		If a node is <font color='red'>red</font>, then both its children are
         *		<font color='darkBlue'>black</font>.
         *	</li>
         *  <li>
         *		Every path from a given node to any of its descendant NIL nodes contains the same number of
         *		<font color='darkBlue'>black</font> nodes. Some definitions: the number of
         *		<font color='darkBlue'>black</font> nodes from the root to a node is the node's
         *		<font color='darkBlue'>black</font> depth; the uniform number of <font color='darkBlue'>black</font>
         *		nodes in all paths from root to the leaves is called the <font color='darkBlue'>black</font>-height of
         *		the red-black tree.
         *	</li>
         * </ol>
         *
         * <p> <img src="http://samchon.github.io/typescript-stl/images/design/conceptual_diagram/Red-black_tree_example.svg"
         *			style="max-width: 100%" /> </p>
         *
         * <p> These constraints enforce a critical property of red-black trees: the path from the root to the farthest
         * leaf is no more than twice as long as the path from the root to the nearest leaf. The result is that the tree
         * is roughly height-balanced. Since operations such as inserting, deleting, and finding values require
         * worst-case time proportional to the height of the tree, this theoretical upper bound on the height allows
         * red-black trees to be efficient in the worst case, unlike ordinary binary search trees. </p>
         *
         * <p> To see why this is guaranteed, it suffices to consider the effect of properties 4 and 5 together. For a
         * red-black tree T, let B be the number of <font color='darkBlue'>black</font> nodes in property 5. Let the
         * shortest possible path from the root of T to any leaf consist of B <font color='darkBlue'>black</font> nodes.
         * Longer possible paths may be constructed by inserting <font color='red'>red</font> nodes. However, property 4
         * makes it impossible to insert more than one consecutive <font color='red'>red</font> node. Therefore,
         * ignoring any <font color='darkBlue'>black</font> NIL leaves, the longest possible path consists of 2*B nodes,
         * alternating <font color='darkBlue'>black</font> and <font color='red'>red</font> (this is the worst case).
         * Counting the <font color='darkBlue'>black</font> NIL leaves, the longest possible path consists of 2*B-1
         * nodes. </p>
         *
         * <p> The shortest possible path has all <font color='darkBlue'>black</font> nodes, and the longest possible
         * path alternates between <font color='red'>red</font> and <font color='darkBlue'>black</font> nodes. Since all
         * maximal paths have the same number of <font color='darkBlue'>black</font> nodes, by property 5, this shows
         * that no path is more than twice as long as any other path. </p>
         *
         * @param <T> Type of elements.
         *
         * @reference https://en.wikipedia.org/w/index.php?title=Red%E2%80%93black_tree
         * @inventor Rudolf Bayer
         * @author Migrated by Jeongho Nam <http://samchon.org>
         */
        class XTree {
            /* =========================================================
                CONSTRUCTOR
            ========================================================= */
            /**
             * Default Constructor.
             */
            constructor() {
                this.root_ = null;
            }
            /**
             * Clear, removes all tree nodes.
             */
            clear() {
                this.root_ = null;
            }
            /* =========================================================
                ACCESSORS
                    - GETTERS
                    - COMPARISON
            ============================================================
                GETTERS
            --------------------------------------------------------- */
            /**
             * Find a node from its contained value.
             *
             * @param val Value to find.
             */
            find(val) {
                if (this.root_ == null)
                    return null;
                let node = this.root_;
                while (true) {
                    let newNode = null;
                    if (this.is_equal_to(val, node.value))
                        break; // EQUALS, MEANS MATCHED, THEN TERMINATE
                    else if (this.is_less(val, node.value))
                        newNode = node.left; // LESS, THEN TO THE LEFT
                    else
                        newNode = node.right; // GREATER, THEN TO THE RIGHT
                    // ULTIL CHILD NODE EXISTS
                    if (newNode == null)
                        break;
                    // SHIFT A NEW NODE TO THE NODE TO BE RETURNED
                    node = newNode;
                }
                return node;
            }
            /**
             * Fetch maximum (the rightes?) node from one.
             *
             * @param node A node to fetch its maximum node.
             * @return The maximum node.
             */
            fetch_maximum(node) {
                while (node.right != null)
                    node = node.right;
                return node;
            }
            /* =========================================================
                ELEMENTS I/O
                    - INSERT
                    - ERASE
                    - COLOR
                    - ROTATION
            ============================================================
                INSERT
            --------------------------------------------------------- */
            /**
             * <p> Insert an element with a new node. </p>
             *
             * <p> Insertion begins by adding the node as any binary search tree insertion does and by coloring it
             * <font color='red'>red</font>. Whereas in the binary search tree, we always add a leaf, in the red-black
             * tree, leaves contain no information, so instead we add a <font color='red'>red</font> interior node, with
             * two <font color='darkBlue'>black</font> leaves, in place of an existing
             * <font color='darkBlue'>black</font> leaf. </p>
             *
             * <p> What happens next depends on the color of other nearby nodes. The term uncle node will be used to
             * refer to the sibling of a node's parent, as in human family trees. Note that: </p>
             *
             * <ul>
             *	<li> property 3 (all leaves are <font color='darkBlue'>black</font>) always holds. </li>
             *	<li>
             *		property 4 (both children of every <font color='red'>red</font> node are
             *		<font color='darkBlue'>black</font>) is threatened only by adding a <font color='red'>red</font>
             *		node, repainting a <font color='darkBlue'>black</font> node <font color='red'>red</font>, or a
             *		rotation.
             *	</li>
             *	<li>
             *		property 5 (all paths from any given node to its leaf nodes contain the same number of
             *		<font color='darkBlue'>black</font> nodes) is threatened only by adding a
             *		<font color='darkBlue'>black</font> node, repainting a <font color='red'>red</font> node
             *		<font color='darkBlue'>black</font> (or vice versa), or a rotation.
             *	</li>
             * </ul>
             *
             * <h4> Notes </h4>
             * <ol>
             *	<li>
             *		The label <i><b>N</b></i> will be used to denote the current node (colored
             *		<font color='red'>red</font>). In the diagrams <i><b>N</b></i> carries a blue contour. At the
             *		beginning, this is the new node being inserted, but the entire procedure may also be applied
             *		recursively to other nodes (see case 3). {@link XTreeNode.parent <b>P</b>} will denote
             *		<i><b>N</b></i>'s parent node, {@link XTreeNode.grand_parent <b>G</b>} will denote <i><b>N</b></i>'s
             *		grandparent, and {@link XTreeNode.uncle <b>U</b>} will denote <i><b>N</b></i>'s uncle. In between
             *		some cases, the roles and labels of the nodes are exchanged, but in each case, every label continues
             *		to represent the same node it represented at the beginning of the case.
             *	</li>
             *	<li>
             *		If a node in the right (target) half of a diagram carries a blue contour it will become the current
             *		node in the next iteration and there the other nodes will be newly assigned relative to it. Any
             *		color shown in the diagram is either assumed in its case or implied by those assumptions.
             *	</li>
             *	<li>
             *		A numbered triangle represents a subtree of unspecified depth. A <font color='darkBlue'>black</font>
             *		circle atop a triangle means that <font color='darkBlue'>black</font>-height of subtree is greater
             *		by one compared to subtree without this circle. </li>
             * </ol>
             *
             * <p> There are several cases of red-black tree insertion to handle: </p>
             *
             * <ul>
             *	<li> <i><b>N</b></i> is the root node, i.e., first node of red-black tree. </li>
             *	<li>
             *		<i><b>N</b></i>'s parent ({@link XTreeNode.parent <b>P</b>}) is <font color='darkBlue'>black</font>.
             *	</li>
             *	<li>
             *		<i><b>N</b></i>'s parent ({@link XTreeNode.parent <b>P</b>}) and uncle
             *		({@link XTreeNode.uncle <b>U</b>}) are <font color='red'>red</font>.
             *	</li>
             *	<li>
             *		<i><b>N</b></i> is added to right of left child of grandparent, or <i><b>N</b></i> is added to left
             *		of right child of grandparent ({@link XTreeNode.parent <b>P</b>} is <font color='red'>red</font> and
             *		{@link XTreeNode.uncle <b>U</b>} is <font color='darkBlue'>black</font>).
             *	</li>
             *	<li>
             *		<i><b>N</b></i> is added to left of left child of grandparent, or <i><b>N</b></i> is added to right
             *		of right child of grandparent ({@link XTreeNode.parent <b>P</b>} is <font color='red'>red</font> and
             *		{@link XTreeNode.uncle <b>U</b>} is <font color='darkBlue'>black</font>).
             *	</li>
             * </ul>
             *
             * <h4> Note </h4>
             * <p> Note that inserting is actually in-place, since all the calls above use tail recursion. </p>
             *
             * <p> In the algorithm above, all cases are chained in order, except in insert case 3 where it can recurse
             * to case 1 back to the grandparent node: this is the only case where an iterative implementation will
             * effectively loop. Because the problem of repair is escalated to the next higher level but one, it takes
             * maximally h⁄2 iterations to repair the tree (where h is the height of the tree). Because the probability
             * for escalation decreases exponentially with each iteration the average insertion cost is constant. </p>
             *
             * @param val An element to insert.
             */
            insert(val) {
                let parent = this.find(val);
                let node = new base.XTreeNode(val, base.Color.RED);
                if (parent == null)
                    this.root_ = node;
                else {
                    node.parent = parent;
                    if (this.is_less(node.value, parent.value))
                        parent.left = node;
                    else
                        parent.right = node;
                }
                this.insert_case1(node);
            }
            /**
             * <p> <i><b>N</b></i> is the root node, i.e., first node of red-black tree. </p>
             *
             * <p> The current node <i><b>N</b></i> is at the {@link root_ root} of the tree. </p>
             *
             * <p> In this case, it is repainted <font color='darkBlue'>black</font> to satisfy property 2 (the root is
             * <font color='darkBlue'>black</font>). Since this adds one <font color='darkBlue'>black</font> node to
             * every path at once, property 5 (all paths from any given node to its leaf nodes contain the same number
             * of <font color='darkBlue'>black</font> nodes) is not violated. </p>
             *
             * @param N A node to be inserted or swapped.
             */
            insert_case1(N) {
                if (N.parent == null)
                    N.color = base.Color.BLACK;
                else
                    this.insert_case2(N);
            }
            /**
             * <p> <i><b>N</b></i>'s parent ({@link XTreeNode.parent <b>P</b>}) is <font color='darkBlue'>black</font>. </p>
             *
             * <p> The current node's parent {@link XTreeNode.parent <b>P</b>} is <font color='darkBlue'>black</font>,
             * so property 4 (both children of every <font color='red'>red</font> node are
             * <font color='darkBlue'>black</font>) is not invalidated. </p>
             *
             * <p> In this case, the tree is still valid. Property 5 (all paths from any given node to its leaf nodes
             * contain the same number of <font color='darkBlue'>black</font> nodes) is not threatened, because the
             * current node <i><b>N</b></i> has two <font color='darkBlue'>black</font> leaf children, but because
             * <i><b>N</b></i> is <font color='red'>red</font>, the paths through each of its children have the same
             * number of <font color='darkBlue'>black</font> nodes as the path through the leaf it replaced, which was
             * <font color='darkBlue'>black</font>, and so this property remains satisfied. </p>
             *
             * @param N A node to be inserted or swapped.
             */
            insert_case2(N) {
                if (this.fetch_color(N.parent) == base.Color.BLACK)
                    return;
                else
                    this.insert_case3(N);
            }
            /**
             * <p> <i><b>N</b></i>'s parent ({@link XTreeNode.parent <b>P</b>}) and uncle
             * (<i>{@link XTreeNode.uncle <b>U</b>}</i>) are <font color='red'>red</font>. </p>
             *
             * <p> If both the parent {@link XTreeNode.parent <b>P</b>} and the uncle {@link XTreeNode.uncle <b>U</b>}
             * are <font color='red'>red</font>, then both of them can be repainted <font color='darkBlue'>black</font>
             * and the grandparent {@link XTreeNode.grand_parent <b>G</b>} becomes <font color='red'>red</font> (to
             * maintain property 5 (all paths from any given node to its leaf nodes contain the same number of
             * <font color='darkBlue'>black</font> nodes)). </p>
             *
             * <p> Now, the current <font color='red'>red</font> node <i><b>N</b></i> has a
             * <font color='darkBlue'>black</font> parent. Since any path through the parent or uncle must pass through
             * the grandparent, the number of <font color='darkBlue'>black</font> nodes on these paths has not changed.
             *
             * <p> However, the grandparent {@link XTreeNode.grand_parent <b>G</b>} may now violate properties 2 (The
             * root is <font color='darkBlue'>black</font>) or 4 (Both children of every <font color='red'>red</font>
             * node are <font color='darkBlue'>black</font>) (property 4 possibly being violated since
             * {@link XTreeNode.grand_parent <b>G</b>} may have a <font color='red'>red</font> parent). </p>
             *
             * <p> To fix this, the entire procedure is recursively performed on {@link XTreeNode.grand_parent <b>G</b>}
             * from case 1. Note that this is a tail-recursive call, so it could be rewritten as a loop; since this is
             * the only loop, and any rotations occur after this loop, this proves that a constant number of rotations
             * occur. </p>
             *
             * <p> <img src="http://samchon.github.io/typescript-stl/images/design/conceptual_diagram/Red-black_tree_insert_case_3.svg"
                        style="max-width: 100%" /> </p>
             *
             * @param N A node to be inserted or swapped.
             */
            insert_case3(N) {
                if (this.fetch_color(N.uncle) == base.Color.RED) {
                    N.parent.color = base.Color.BLACK;
                    N.uncle.color = base.Color.BLACK;
                    N.grand_parent.color = base.Color.RED;
                    this.insert_case1(N.grand_parent);
                }
                else {
                    this.insert_case4(N);
                }
            }
            /**
             * <p> <i><b>N</b></i> is added to right of left child of grandparent, or <i><b>N</b></i> is added to left
             * of right child of grandparent ({@link XTreeNode.parent <b>P</b>} is <font color='red'>red</font> and
             * {@link XTreeNode.uncle <b>U</b>} is <font color='darkBlue'>black</font>). </p>
             *
             * <p> The parent {@link XTreeNode.parent <b>P</b>} is <font color='red'>red</font> but the uncle
             * {@link XTreeNode.uncle <b>U</b>} is <font color='darkBlue'>black</font>; also, the current node
             * <i><b>N</b></i> is the right child of {@link XTreeNode.parent <b>P</b>}, and
             * {@link XTreeNode.parent <b>P</b>} in turn is the left child of its parent
             * {@link XTreeNode.grand_parent <b>G</b>}. </p>
             *
             * <p> In this case, a left rotation on {@link XTreeNode.parent <b>P</b>} that switches the roles of the
             * current node <i><b>N</b></i> and its parent {@link XTreeNode.parent <b>P</b>} can be performed; then,
             * the former parent node {@link XTreeNode.parent <b>P</b>} is dealt with using case 5
             * (relabeling <i><b>N</b></i> and {@link XTreeNode.parent <b>P</b>}) because property 4 (both children of
             * every <font color='red'>red</font> node are <font color='darkBlue'>black</font>) is still violated. </p>
             *
             * <p> The rotation causes some paths (those in the sub-tree labelled "1") to pass through the node
             * <i><b>N</b></i> where they did not before. It also causes some paths (those in the sub-tree labelled "3")
             * not to pass through the node {@link XTreeNode.parent <b>P</b>} where they did before. However, both of
             * these nodes are <font color='red'>red</font>, so property 5 (all paths from any given node to its leaf
             * nodes contain the same number of <font color='darkBlue'>black</font> nodes) is not violated by the
             * rotation. </p>
             *
             * <p> After this case has been completed, property 4 (both children of every <font color='red'>red</font>
             * node are <font color='darkBlue'>black</font>) is still violated, but now we can resolve this by
             * continuing to case 5. </p>
             *
             * <p> <img src="http://samchon.github.io/typescript-stl/images/design/conceptual_diagram/Red-black_tree_insert_case_4.svg"
                        style="max-width: 100%" /> </p>
             *
             * @param N A node to be inserted or swapped.
             */
            insert_case4(node) {
                if (node == node.parent.right && node.parent == node.grand_parent.left) {
                    this.rotate_left(node.parent);
                    node = node.left;
                }
                else if (node == node.parent.left && node.parent == node.grand_parent.right) {
                    this.rotate_right(node.parent);
                    node = node.right;
                }
                this.insert_case5(node);
            }
            /**
             * <p> <i><b>N</b></i> is added to left of left child of grandparent, or <i><b>N</b></i> is added to right
             * of right child of grandparent ({@link XTreeNode.parent <b>P</b>} is <font color='red'>red</font> and
             * {@link XTreeNode.uncle <b>U</b>} is <font color='darkBlue'>black</font>). </p>
             *
             * <p> The parent {@link XTreeNode.parent <b>P</b>} is <font color='red'>red</font> but the uncle
             * {@link XTreeNode.uncle <b>U</b>} is <font color='darkBlue'>black</font>, the current node <i><b>N</b></i>
             * is the left child of {@link XTreeNode.parent <b>P</b>}, and {@link XTreeNode.parent <b>P</b>} is the left
             * child of its parent {@link XTreeNode.grand_parent <b>G</b>}. </p>
             *
             * <p>In this case, a right rotation on {@link XTreeNode.grand_parent <b>G</b>} is performed; the result is a
             * tree where the former parent {@link XTreeNode.parent <b>P</b>} is now the parent of both the current node
             * <i><b>N</b></i> and the former grandparent {@link XTreeNode.grand_parent <b>G</b>}. </p>
             *
             * <p> {@link XTreeNode.grand_parent <b>G</b>} is known to be <font color='darkBlue'>black</font>, since its
             * former child {@link XTreeNode.parent <b>P</b>} could not have been <font color='red'>red</font> otherwise
             * (without violating property 4). Then, the colors of {@link XTreeNode.parent <b>P</b>} and
             * {@link XTreeNode.grand_parent <b>G</b>} are switched, and the resulting tree satisfies property 4 (both
             * children of every <font color='red'>red</font> node are <font color='darkBlue'>black</font>). Property 5
             * (all paths from any given node to its leaf nodes contain the same number of
             * <font color='darkBlue'>black</font> nodes) also remains satisfied, since all paths that went through any
             * of these three nodes went through {@link XTreeNode.grand_parent <b>G</b>} before, and now they all go
             * through {@link XTreeNode.parent <b>P</b>}. In each case, this is the only
             * <font color='darkBlue'>black</font> node of the three. </p>
             *
             * <p> <img src="http://samchon.github.io/typescript-stl/images/design/conceptual_diagram/Red-black_tree_insert_case_5.svg"
                        style="max-width: 100%" /> </p>
             *
             * @param N A node to be inserted or swapped.
             */
            insert_case5(node) {
                node.parent.color = base.Color.BLACK;
                node.grand_parent.color = base.Color.RED;
                if (node == node.parent.left && node.parent == node.grand_parent.left)
                    this.rotate_right(node.grand_parent);
                else
                    this.rotate_left(node.grand_parent);
            }
            /* ---------------------------------------------------------
                ERASE
            --------------------------------------------------------- */
            /**
             * <p> Erase an element with its node. </p>
             *
             * <p> In a regular binary search tree when deleting a node with two non-leaf children, we find either the
             * maximum element in its left subtree (which is the in-order predecessor) or the minimum element in its
             * right subtree (which is the in-order successor) and move its value into the node being deleted (as shown
             * here). We then delete the node we copied the value from, which must have fewer than two non-leaf children.
             * (Non-leaf children, rather than all children, are specified here because unlike normal binary search
             * trees, red-black trees can have leaf nodes anywhere, so that all nodes are either internal nodes with
             * two children or leaf nodes with, by definition, zero children. In effect, internal nodes having two leaf
             * children in a red-black tree are like the leaf nodes in a regular binary search tree.) Because merely
             * copying a value does not violate any red-black properties, this reduces to the problem of deleting a node
             * with at most one non-leaf child. Once we have solved that problem, the solution applies equally to the
             * case where the node we originally want to delete has at most one non-leaf child as to the case just
             * considered where it has two non-leaf children. </p>
             *
             * <p> Therefore, for the remainder of this discussion we address the deletion of a node with at most one
             * non-leaf child. We use the label <b>M</b> to denote the node to be deleted; <b>C</b> will denote a
             * selected child of <b>M</b>, which we will also call "its child". If <b>M</b> does have a non-leaf child,
             * call that its child, <b>C</b>; otherwise, choose either leaf as its child, <b>C</b>. </p>
             *
             * <p> If <b>M</b> is a <font color='red'>red</font> node, we simply replace it with its child <b>C</b>,
             *  which must be <font color='darkBlue'>black</font> by property 4. (This can only occur when <b>M</b> has
             * two leaf children, because if the <font color='red'>red</font> node <b>M</b> had a
             * <font color='darkBlue'>black</font> non-leaf child on one side but just a leaf child on the other side,
             * then the count of <font color='darkBlue'>black</font> nodes on both sides would be different, thus the
             * tree would violate property 5.) All paths through the deleted node will simply pass through one fewer
             * <font color='red'>red</font> node, and both the deleted node's parent and child must be
             * <font color='darkBlue'>black</font>, so property 3 (all leaves are <font color='darkBlue'>black</font>)
             * and property 4 (both children of every <font color='red'>red</font> node are
             * <font color='darkBlue'>black</font>) still hold. </p>
             *
             * <p> Another simple case is when <b>M</b> is <font color='darkBlue'>black</font> and <b>C</b> is
             * <font color='red'>red</font>. Simply removing a <font color='darkBlue'>black</font> node could break
             * Properties 4 (“Both children of every <font color='red'>red</font> node are
             * <font color='darkBlue'>black</font>”) and 5 (“All paths from any given node to its leaf nodes contain the
             * same number of <font color='darkBlue'>black</font> nodes”), but if we repaint <b>C</b>
             * <font color='darkBlue'>black</font>, both of these properties are preserved. </p>
             *
             * <p> The complex case is when both <b>M</b> and <b>C</b> are <font color='darkBlue'>black</font>. (This
             * can only occur when deleting a <font color='darkBlue'>black</font> node which has two leaf children,
             * because if the <font color='darkBlue'>black</font> node <b>M</b> had a <font color='darkBlue'>black</font>
             * non-leaf child on one side but just a leaf child on the other side, then the count of
             * <font color='darkBlue'>black</font> nodes on both sides would be different, thus the tree would have been
             * an invalid red-black tree by violation of property 5.) We begin by replacing <b>M</b> with its child
             * <b>C</b>. We will relabel this child <b>C</b> (in its new position) <i><b>N</b></i>, and its sibling (its
             * new parent's other child) {@link XTreeNode.sibling <b>S</b>}. ({@link XTreeNode.sibling <b>S</b>} was
             * previously the sibling of <b>M</b>.) </p>
             *
             * <p> In the diagrams below, we will also use {@link XTreeNode.parent <b>P</b>} for <i><b>N</b></i>'s new
             * parent (<b>M</b>'s old parent), <b>SL</b> for {@link XTreeNode.sibling <b>S</b>}'s left child, and
             * <b>SR</b> for {@link XTreeNode.sibling <b>S</b>}'s right child ({@link XTreeNode.sibling <b>S</b>} cannot
             * be a leaf because if <b>M</b> and <b>C</b> were <font color='darkBlue'>black</font>, then
             * {@link XTreeNode.parent <b>P</b>}'s one subtree which included <b>M</b> counted two
             * <font color='darkBlue'>black</font>-height and thus {@link XTreeNode.parent <b>P</b>}'s other subtree
             * which includes {@link XTreeNode.sibling <b>S</b>} must also count two
             * <font color='darkBlue'>black</font>-height, which cannot be the case if {@link XTreeNode.sibling <b>S</b>}
             * is a leaf node). </p>
             *
             * <h4> Notes </h4>
             * <ol>
             *	<li>
             *		The label <i><b>N</b></i> will be used to denote the current node (colored
             *		<font color='darkBlue'>black</font>). In the diagrams <i><b>N</b></i> carries a blue contour. At the
             *		beginning, this is the replacement node and a leaf, but the entire procedure may also be applied
             *		recursively to other nodes (see case 3). In between some cases, the roles and labels of the nodes
             *		are exchanged, but in each case, every label continues to represent the same node it represented at
             *		the beginning of the case.
             *	</li>
             *	<li>
             *		If a node in the right (target) half of a diagram carries a blue contour it will become the current
             *		node in the next iteration and there the other nodes will be newly assigned relative to it. Any
             *		color shown in the diagram is either assumed in its case or implied by those assumptions.
             *		White represents an arbitrary color (either <font color='red'>red</font> or
             *		<font color='darkBlue'>black</font>), but the same in both halves of the diagram.
             *	</li>
             *	<li>
             *		A numbered triangle represents a subtree of unspecified depth. A <font color='darkBlue'>black</font>
             *		circle atop a triangle means that <font color='darkBlue'>black</font>-height of subtree is greater
             *		by one compared to subtree without this circle.
             *	</li>
             * </ol>
             *
             * <p> If both <i><b>N</b></i> and its original parent are <font color='darkBlue'>black</font>, then
             * deleting this original parent causes paths which proceed through <i><b>N</b></i> to have one fewer
             * <font color='darkBlue'>black</font> node than paths that do not. As this violates property 5 (all paths
             * from any given node to its leaf nodes contain the same number of <font color='darkBlue'>black</font>
             * nodes), the tree must be rebalanced. There are several cases to consider: </p>
             *
             * <ol>
             *	<li> <i><b>N</b></i> is the new root. </li>
             *	<li> {@link XTreeNode.sibling <b>S</b>} is <font color='red'>red</font>. </li>
             *	<li>
             *		{@link XTreeNode.parent <b>P</b>}, {@link XTreeNode.sibling <b>S</b>}, and
             *		{@link XTreeNode.sibling <b>S</b>}'s children are <font color='darkBlue'>black</font>. </li>
             *	<li>
             *		{@link XTreeNode.sibling <b>S</b>} and {@link XTreeNode.sibling <b>S</b>}'s children are
             *		<font color='darkBlue'>black</font>, but {@link XTreeNode.parent <b>P</b>} is
             *		<font color='red'>red</font>.
             *	</li>
             *	<li>
             *		{@link XTreeNode.sibling <b>S</b>} is <font color='darkBlue'>black</font>,
             *		{@link XTreeNode.sibling <b>S</b>}'s left child is <font color='red'>red</font>,
             *		{@link XTreeNode.sibling <b>S</b>}'s right child is <font color='darkBlue'>black</font>, and
             *		<i><b>N</b></i> is the left child of its parent.
             *	</li>
             *	<li>
             *		{@link XTreeNode.sibling <b>S</b>} is <font color='darkBlue'>black</font>,
             *		{@link XTreeNode.sibling <b>S</b>}'s right child is <font color='red'>red</font>, and
             *		<i><b>N</b></i> is the left child of its parent {@link XTreeNode.parent <b>P</b>}.
             *	</li>
             * </ol>
             *
             * <p> Again, the function calls all use tail recursion, so the algorithm is in-place. </p>
             *
             * <p> In the algorithm above, all cases are chained in order, except in delete case 3 where it can recurse
             * to case 1 back to the parent node: this is the only case where an iterative implementation will
             * effectively loop. No more than h loops back to case 1 will occur (where h is the height of the tree).
             * And because the probability for escalation decreases exponentially with each iteration the average
             * removal cost is constant. </p>
             *
             * <p> Additionally, no tail recursion ever occurs on a child node, so the tail recursion loop can only
             * move from a child back to its successive ancestors. If a rotation occurs in case 2 (which is the only
             * possibility of rotation within the loop of cases 1–3), then the parent of the node <i><b>N</b></i>
             * becomes <font color='red'>red</font> after the rotation and we will exit the loop. Therefore, at most one
             * rotation will occur within this loop. Since no more than two additional rotations will occur after
             * exiting the loop, at most three rotations occur in total. </p>
             *
             * @param val An element to erase.
             */
            erase(val) {
                let node = this.find(val);
                if (node == null || this.is_equal_to(val, node.value) == false)
                    return;
                if (node.left != null && node.right != null) {
                    let pred = this.fetch_maximum(node.left);
                    node.value = pred.value;
                    node = pred;
                }
                let child = (node.right == null) ? node.left : node.right;
                if (this.fetch_color(node) == base.Color.BLACK) {
                    node.color = this.fetch_color(child);
                    this.erase_case1(node);
                }
                this.replace_node(node, child);
            }
            /**
             * <p> <i><b>N</b></i> is the new root. </p>
             *
             * <p> In this case, we are done. We removed one <font color='darkBlue'>black</font> node from every path,
             * and the new root is <font color='darkBlue'>black</font>, so the properties are preserved. </p>
             *
             * <h4> Note </h4>
             * <p> In cases 2, 5, and 6, we assume <i><b>N</b></i> is the left child of its parent
             * {@link XTreeNode.parent <b>P</b>}. If it is the right child, left and right should be reversed throughout
             * these three cases. Again, the code examples take both cases into account. </p>
             *
             * @param N A node to be erased or swapped.
             */
            erase_case1(N) {
                if (N.parent == null)
                    return;
                else
                    this.erase_case2(N);
            }
            /**
             * <p> {@link XTreeNode.sibling <b>S</b>} is <font color='red'>red</font>. </p>
             *
             * <p> <img src="http://samchon.github.io/typescript-stl/images/design/conceptual_diagram/Red-black_tree_delete_case_2.svg"
                        style="max-width: 100%" /> </p>
             *
             * <p> In this case we reverse the colors of {@link XTreeNode.parent <b>P</b>} and
             * {@link XTreeNode.sibling <b>S</b>}, and then rotate left at {@link XTreeNode.parent <b>P</b>}, turning
             * {@link XTreeNode.sibling <b>S</b>} into <i><b>N</b></i>'s grandparent. </p>
             *
             * <p> Note that {@link XTreeNode.parent <b>P</b>} has to be <font color='darkBlue'>black</font> as it had a
             * <font color='red'>red</font> child. The resulting subtree has a path short one
             * <font color='darkBlue'>black</font> node so we are not done. Now <i><b>N</b></i> has a
             * <font color='darkBlue'>black</font> sibling and a <font color='red'>red</font> parent, so we can proceed
             * to step 4, 5, or 6. (Its new sibling is <font color='darkBlue'>black</font> because it was once the child
             * of the <font color='red'>red</font> {@link XTreeNode.sibling <b>S</b>}.) In later cases, we will re-label
             * <i><b>N</b></i>'s new sibling as {@link XTreeNode.sibling <b>S</b>}. </p>
             *
             * @param N A node to be erased or swapped.
             */
            erase_case2(N) {
                if (this.fetch_color(N.sibling) == base.Color.RED) {
                    N.parent.color = base.Color.RED;
                    N.sibling.color = base.Color.BLACK;
                    if (N == N.parent.left)
                        this.rotate_left(N.parent);
                    else
                        this.rotate_right(N.parent);
                }
                this.erase_case3(N);
            }
            /**
             * <p> {@link XTreeNode.parent <b>P</b>}, {@link XTreeNode.sibling <b>S</b>}, and {@link XTreeNode.sibling
             * <b>S</b>}'s children are <font color='darkBlue'>black</font>. </p>
             *
             * <p> <img src="http://samchon.github.io/typescript-stl/images/design/conceptual_diagram/Red-black_tree_delete_case_3.svg"
                        style="max-width: 100%" /> </p>
             *
             * <p> In this case, we simply repaint {@link XTreeNode.sibling <b>S</b>} <font color='red'>red</font>. The
             * result is that all paths passing through {@link XTreeNode.sibling <b>S</b>}, which are precisely those
             * paths not passing through <i><b>N</b></i>, have one less <font color='darkBlue'>black</font> node.
             * Because deleting <i><b>N</b></i>'s original parent made all paths passing through <i><b>N</b></i> have
             * one less <font color='darkBlue'>black</font> node, this evens things up. </p>
             *
             * <p> However, all paths through {@link XTreeNode.parent <b>P</b>} now have one fewer
             * <font color='darkBlue'>black</font> node than paths that do not pass through
             * {@link XTreeNode.parent <b>P</b>}, so property 5 (all paths from any given node to its leaf nodes contain
             * the same number of <font color='darkBlue'>black</font> nodes) is still violated. </p>
             *
             * <p> To correct this, we perform the rebalancing procedure on {@link XTreeNode.parent <b>P</b>}, starting
             * at case 1. </p>
             *
             * @param N A node to be erased or swapped.
             */
            erase_case3(N) {
                if (this.fetch_color(N.parent) == base.Color.BLACK &&
                    this.fetch_color(N.sibling) == base.Color.BLACK &&
                    this.fetch_color(N.sibling.left) == base.Color.BLACK &&
                    this.fetch_color(N.sibling.right) == base.Color.BLACK) {
                    N.sibling.color = base.Color.RED;
                    this.erase_case1(N.parent);
                }
                else
                    this.erase_case4(N);
            }
            /**
             * <p> {@link XTreeNode.sibling <b>S</b>} and {@link XTreeNode.sibling <b>S</b>}'s children are
             * <font color='darkBlue'>black</font>, but {@link XTreeNode.parent <b>P</b>} is <font color='red'>red</font>. </p>
             *
             * <p> <img src="http://samchon.github.io/typescript-stl/images/design/conceptual_diagram/Red-black_tree_delete_case_4.svg"
                        style="max-width: 100%" /> </p>
             *
             * <p> In this case, we simply exchange the colors of {@link XTreeNode.sibling <b>S</b>} and
             * {@link XTreeNode.parent <b>P</b>}. This does not affect the number of <font color='darkBlue'>black</font>
             * nodes on paths going through {@link XTreeNode.sibling <b>S</b>}, but it does add one to the number of
             * <font color='darkBlue'>black</font> nodes on paths going through <i><b>N</b></i>, making up for the
             * deleted <font color='darkBlue'>black</font> node on those paths. </p>
             *
             * @param N A node to be erased or swapped.
             */
            erase_case4(N) {
                if (this.fetch_color(N.parent) == base.Color.RED &&
                    N.sibling != null &&
                    this.fetch_color(N.sibling) == base.Color.BLACK &&
                    this.fetch_color(N.sibling.left) == base.Color.BLACK &&
                    this.fetch_color(N.sibling.right) == base.Color.BLACK) {
                    N.sibling.color = base.Color.RED;
                    N.parent.color = base.Color.BLACK;
                }
                else
                    this.erase_case5(N);
            }
            /**
             * <p> {@link XTreeNode.sibling <b>S</b>} is <font color='darkBlue'>black</font>, {@link XTreeNode.sibling <b>S</b>}'s
             * left child is <font color='red'>red</font>, {@link XTreeNode.sibling <b>S</b>}'s right child is
             * <font color='darkBlue'>black</font>, and <i><b>N</b></i> is the left child of its parent. </p>
             *
             * <p> <img src="http://samchon.github.io/typescript-stl/images/design/conceptual_diagram/Red-black_tree_delete_case_5.svg"
                        style="max-width: 100%" /> </p>
             *
             * <p> In this case we rotate right at {@link XTreeNode.sibling <b>S</b>}, so that
             * {@link XTreeNode.sibling <b>S</b>}'s left child becomes {@link XTreeNode.sibling <b>S</b>}'s parent and
             * <i><b>N</b></i>'s new sibling. We then exchange the colors of {@link XTreeNode.sibling <b>S</b>} and its
             * new parent. </p>
             *
             * <p> All paths still have the same number of <font color='darkBlue'>black</font> nodes, but now
             * <i><b>N</b></i> has a <font color='darkBlue'>black</font> sibling whose right child is
             * <font color='red'>red</font>, so we fall into case 6. Neither <i><b>N</b></i> nor its parent are affected
             * by this transformation. (Again, for case 6, we relabel <i><b>N</b></i>'s new sibling as
             * {@link XTreeNode.sibling <b>S</b>}.) </p>
             *
             * @param N A node to be erased or swapped.
             */
            erase_case5(N) {
                if (N == N.parent.left &&
                    N.sibling != null &&
                    this.fetch_color(N.sibling) == base.Color.BLACK &&
                    this.fetch_color(N.sibling.left) == base.Color.RED &&
                    this.fetch_color(N.sibling.right) == base.Color.BLACK) {
                    N.sibling.color = base.Color.RED;
                    N.sibling.left.color = base.Color.BLACK;
                    this.rotate_right(N.sibling);
                }
                else if (N == N.parent.right &&
                    N.sibling != null &&
                    this.fetch_color(N.sibling) == base.Color.BLACK &&
                    this.fetch_color(N.sibling.left) == base.Color.BLACK &&
                    this.fetch_color(N.sibling.right) == base.Color.RED) {
                    N.sibling.color = base.Color.RED;
                    N.sibling.right.color = base.Color.BLACK;
                    this.rotate_left(N.sibling);
                }
            }
            /**
             * <p> {@link XTreeNode.sibling <b>S</b>} is <font color='darkBlue'>black</font>,
             * {@link XTreeNode.sibling <b>S</b>}'s right child is <font color='red'>red</font>, and <i><b>N</b></i> is
             * the left child of its parent {@link XTreeNode.parent <b>P</b>}. </p>
             *
             * <p> In this case we rotate left at {@link XTreeNode.parent <b>P</b>}, so that
             * {@link XTreeNode.sibling <b>S</b>} becomes the parent of {@link XTreeNode.parent <b>P</b>} and
             * {@link XTreeNode.sibling <b>S</b>}'s right child. We then exchange the colors of
             * {@link XTreeNode.parent <b>P</b>} and {@link XTreeNode.sibling <b>S</b>}, and make
             * {@link XTreeNode.sibling <b>S</b>}'s right child <font color='darkBlue'>black</font>. </p>
             *
             * <p> The subtree still has the same color at its root, so Properties 4 (Both children of every
             * <font color='red'>red</font> node are <font color='darkBlue'>black</font>) and 5 (All paths from any
             * given node to its leaf nodes contain the same number of <font color='darkBlue'>black</font> nodes) are
             * not violated. However, <i><b>N</b></i> now has one additional <font color='darkBlue'>black</font>
             * ancestor: either {@link XTreeNode.parent <b>P</b>} has become <font color='darkBlue'>black</font>, or it
             * was <font color='darkBlue'>black</font> and {@link XTreeNode.sibling <b>S</b>} was added as a
             * <font color='darkBlue'>black</font> grandparent. </p>
             *
             * <p> Thus, the paths passing through <i><b>N</b></i> pass through one additional
             * <font color='darkBlue'>black</font> node. </p>
             *
             * <p> <img src="http://samchon.github.io/typescript-stl/images/design/conceptual_diagram/Red-black_tree_delete_case_6.svg"
                        style="max-width: 100%" /> </p>
             *
             * <p> Meanwhile, if a path does not go through <i><b>N</b></i>, then there are two possibilities: </p>
             * <ol>
             *	<li>
             *		It goes through <i><b>N</b></i>'s new sibling <b>SL</b>, a node with arbitrary color and the root of
             *		the subtree labeled 3 (s. diagram). Then, it must go through {@link XTreeNode.sibling <b>S</b>} and
             *		{@link XTreeNode.parent <b>P</b>}, both formerly and currently, as they have only exchanged colors
             *		and places. Thus the path contains the same number of <font color='darkBlue'>black</font> nodes.
             *	</li>
             *	<li>
             *		It goes through <i><b>N</b></i>'s new uncle, {@link XTreeNode.sibling <b>S</b>}'s right child. Then,
             *		it formerly went through {@link XTreeNode.sibling <b>S</b>}, {@link XTreeNode.sibling <b>S</b>}'s
             *		parent, and {@link XTreeNode.sibling <b>S</b>}'s right child <b>SR</b> (which was
             *		<font color='red'>red</font>), but now only goes through {@link XTreeNode.sibling <b>S</b>}, which
             *		has assumed the color of its former parent, and {@link XTreeNode.sibling <b>S</b>}'s right child,
             *		which has changed from <font color='red'>red</font> to <font color='darkBlue'>black</font> (assuming
             *		{@link XTreeNode.sibling <b>S</b>}'s color: <font color='darkBlue'>black</font>). The net effect is
             *		that this path goes through the same number of <font color='darkBlue'>black</font> nodes.
             *	</li>
             * </ol>
             *
             * <p> Either way, the number of <font color='darkBlue'>black</font> nodes on these paths does not change.
             * Thus, we have restored Properties 4 (Both children of every <font color='red'>red</font> node are
             * <font color='darkBlue'>black</font>) and 5 (All paths from any given node to its leaf nodes contain the
             * same number of <font color='darkBlue'>black</font> nodes). The white node in the diagram can be either
             * <font color='red'>red</font> or <font color='darkBlue'>black</font>, but must refer to the same color
             * both before and after the transformation. </p>
             *
             * @param N A node to be erased or swapped.
             */
            erase_case6(node) {
                node.sibling.color = this.fetch_color(node.parent);
                node.parent.color = base.Color.BLACK;
                if (node == node.parent.left) {
                    node.sibling.right.color = base.Color.BLACK;
                    this.rotate_left(node.parent);
                }
                else {
                    node.sibling.left.color = base.Color.BLACK;
                    this.rotate_right(node.parent);
                }
            }
            /* ---------------------------------------------------------
                ROTATION
            --------------------------------------------------------- */
            /**
             * Rotate a node left.
             *
             * @param node Node to rotate left.
             */
            rotate_left(node) {
                let right = node.right;
                this.replace_node(node, right);
                node.right = right.left;
                if (right.left != null)
                    right.left.parent = node;
                right.left = node;
                node.parent = right;
            }
            /**
             * Rotate a node to right.
             *
             * @param node A node to rotate right.
             */
            rotate_right(node) {
                let left = node.left;
                this.replace_node(node, left);
                node.left = left.right;
                if (left.right != null)
                    left.right.parent = node;
                left.right = node;
                node.parent = left;
            }
            /**
             * Replace a node.
             *
             * @param oldNode Ordinary node to be replaced.
             * @param newNode Target node to replace.
             */
            replace_node(oldNode, newNode) {
                if (oldNode.parent == null)
                    this.root_ = newNode;
                else {
                    if (oldNode == oldNode.parent.left)
                        oldNode.parent.left = newNode;
                    else
                        oldNode.parent.right = newNode;
                }
                if (newNode != null)
                    newNode.parent = oldNode.parent;
            }
            /* ---------------------------------------------------------
                COLOR
            --------------------------------------------------------- */
            /**
             * Fetch color from a node.
             *
             * @param node A node to fetch color.
             * @retur color.
             */
            fetch_color(node) {
                if (node == null)
                    return base.Color.BLACK;
                else
                    return node.color;
            }
        }
        base.XTree = XTree;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
/// <reference path="XTree.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * <p> A red-black Tree storing {@link SetIterator SetIterators}. </p>
         *
         * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/set_containers.png" target="_blank">
         * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/set_containers.png" style="max-width: 100%" /></a> </p>
         *
         * @author Jeongho Nam <http://samchon.org>
         */
        class AtomicTree extends base.XTree {
            /* ---------------------------------------------------------
                CONSTRUCTOR
            --------------------------------------------------------- */
            /**
             * Default Constructor.
             */
            constructor(set, compare = std.less) {
                super();
                this.set_ = set;
                this.compare_ = compare;
            }
            find(val) {
                if (val instanceof std.SetIterator && val.value instanceof std.SetIterator == false)
                    return super.find(val);
                else
                    return this.find_by_val(val);
            }
            /**
             * @hidden
             */
            find_by_val(val) {
                if (this.root_ == null)
                    return null;
                let node = this.root_;
                while (true) {
                    let newNode = null;
                    if (std.equal_to(val, node.value.value))
                        break; // EQUALS, MEANS MATCHED, THEN TERMINATE
                    else if (this.compare_(val, node.value.value))
                        newNode = node.left; // LESS, THEN TO THE LEFT
                    else
                        newNode = node.right; // GREATER, THEN TO THE RIGHT
                    // ULTIL CHILD NODE EXISTS
                    if (newNode == null)
                        break;
                    // SHIFT A NEW NODE TO THE NODE TO BE RETURNED
                    node = newNode;
                }
                return node;
            }
            /* ---------------------------------------------------------
                BOUNDS
            --------------------------------------------------------- */
            /**
             * <p> Return iterator to lower bound. </p>
             *
             * <p> Returns an iterator pointing to the first element in the container which is not considered to
             * go before <i>val</i> (i.e., either it is equivalent or goes after). </p>
             *
             * <p> The function uses its internal comparison object (key_comp) to determine this, returning an
             * iterator to the first element for which key_comp(element,val) would return false. </p>
             *
             * <p> If the {@link ITreeSet} class is instantiated with the default comparison type ({@link less}),
             * the function returns an iterator to the first element that is not less than <i>val</i>. </p>
    
             * <p> A similar member function, {@link upper_bound}, has the same behavior as {@link lower_bound}, except
             * in the case that the {@link ITreeSet} contains elements equivalent to <i>val</i>: In this case
             * {@link lower_bound} returns an iterator pointing to the first of such elements, whereas
             * {@link upper_bound} returns an iterator pointing to the element following the last. </p>
             *
             * @param val Value to compare.
             *
             * @return An iterator to the the first element in the container which is not considered to go before
             *		   <i>val</i>, or {@link ITreeSet.end} if all elements are considered to go before <i>val</i>.
             */
            lower_bound(val) {
                let node = this.find(val);
                if (node == null)
                    return this.set_.end();
                else if (std.equal_to(node.value.value, val))
                    return node.value;
                else {
                    let it = node.value;
                    while (!std.equal_to(it, this.set_.end()) && this.compare_(it.value, val))
                        it = it.next();
                    return it;
                }
            }
            /**
             * <p> Return iterator to upper bound. </p>
             *
             * <p> Returns an iterator pointing to the first element in the container which is considered to go after
             * <i>val</i>. </p>
    
             * <p> The function uses its internal comparison object (key_comp) to determine this, returning an
             * iterator to the first element for which key_comp(val,element) would return true. </p>
    
             * <p> If the {@code ITreeSet} class is instantiated with the default comparison type (less), the
             * function returns an iterator to the first element that is greater than <i>val</i>. </p>
             *
             * <p> A similar member function, {@link lower_bound}, has the same behavior as {@link upper_bound}, except
             * in the case that the {@ITreeSet} contains elements equivalent to <i>val</i>: In this case
             * {@link lower_bound} returns an iterator pointing to the first of such elements, whereas
             * {@link upper_bound} returns an iterator pointing to the element following the last. </p>
             *
             * @param val Value to compare.
             *
             * @return An iterator to the the first element in the container which is considered to go after
             *		   <i>val</i>, or {@link TreeSet.end end} if no elements are considered to go after <i>val</i>.
             */
            upper_bound(val) {
                let node = this.find(val);
                if (node == null)
                    return this.set_.end();
                else {
                    let it = node.value;
                    while (!std.equal_to(it, this.set_.end()) && (std.equal_to(it.value, val) || this.compare_(it.value, val)))
                        it = it.next();
                    return it;
                }
            }
            /**
             * <p> Get range of equal elements. </p>
             *
             * <p> Returns the bounds of a range that includes all the elements in the container that are equivalent
             * to <i>val</i>. </p>
             *
             * <p> If no matches are found, the range returned has a length of zero, with both iterators pointing to
             * the first element that is considered to go after val according to the container's
             * internal comparison object (key_comp). </p>
             *
             * <p> Two elements of a multiset are considered equivalent if the container's comparison object returns
             * false reflexively (i.e., no matter the order in which the elements are passed as arguments). </p>
             *
             * @param key Value to search for.
             *
             * @return The function returns a {@link Pair}, whose member {@link Pair.first} is the lower bound of
             *		   the range (the same as {@link lower_bound}), and {@link Pair.second} is the upper bound
             *		   (the same as {@link upper_bound}).
             */
            equal_range(val) {
                return std.make_pair(this.lower_bound(val), this.upper_bound(val));
            }
            /* ---------------------------------------------------------
                COMPARISON
            --------------------------------------------------------- */
            /**
             * <p> Return comparison function. </p>
             *
             * <p> Returns a copy of the comparison function used by the container. </p>
             *
             * <p> By default, this is a {@link less} object, which returns the same as <i>operator<</i>. </p>
             *
             * <p> This object determines the order of the elements in the container: it is a function pointer or a function
             * object that takes two arguments of the same type as the container elements, and returns <code>true</code> if
             * the <i>first argument</i> is considered to go before the <i>second</i> in the <i>strict weak ordering</i> it
             * defines, and <code>false</code> otherwise. </p>
             *
             * <p> Two elements of a {@link ITreeSet} are considered equivalent if {@link key_comp} returns <code>false</code>
             * reflexively (i.e., no matter the order in which the elements are passed as arguments). </p>
             *
             * <p> In {@link ITreeSet} containers, the <i>keys</i> to sort the elements are the values (<i>T</i>) themselves,
             * therefore {@link key_comp} and its sibling member function {@link value_comp} are equivalent. </p>
             *
             * @return The comparison function.
             */
            key_comp() {
                return this.compare_;
            }
            /**
             * <p> Return comparison function. </p>
             *
             * <p> Returns a copy of the comparison function used by the container. </p>
             *
             * <p> By default, this is a {@link less} object, which returns the same as <i>operator<</i>. </p>
             *
             * <p> This object determines the order of the elements in the container: it is a function pointer or a function
             * object that takes two arguments of the same type as the container elements, and returns <code>true</code> if
             * the <i>first argument</i> is considered to go before the <i>second</i> in the <i>strict weak ordering</i> it
             * defines, and <code>false</code> otherwise. </p>
             *
             * <p> Two elements of a {@link ITreeSet} are considered equivalent if {@link key_comp} returns <code>false</code>
             * reflexively (i.e., no matter the order in which the elements are passed as arguments). </p>
             *
             * <p> In {@link ITreeSet} containers, the <i>keys</i> to sort the elements are the values (<i>T</i>) themselves,
             * therefore {@link key_comp} and its sibling member function {@link value_comp} are equivalent. </p>
             *
             * @return The comparison function.
             */
            value_comp() {
                return this.compare_;
            }
            /**
             * @inheritdoc
             */
            is_equal_to(left, right) {
                return std.equal_to(left, right);
            }
            /**
             * @inheritdoc
             */
            is_less(left, right) {
                return this.compare_(left.value, right.value);
            }
        }
        base.AtomicTree = AtomicTree;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * <p> Static class holding enumeration codes of color of Red-black tree. </p>
         *
         * <p> Color codes imposed to nodes of RB-Tree are following those rules: </p>
         *
         * <ol>
         *	<li> A node is either <font color='red'>red</font> or <font color='darkBlue'>black</font>. </li>
         *	<li> The root is <font color='darkBlue'>black</font>. This rule is sometimes omitted. Since the root can
         *		 always be changed from <font color='red'>red</font> to <font color='darkBlue'>black</font>, but not
         *		 necessarily vice versa, this rule has little effect on analysis. </li>
         *	<li> All leaves (NIL; <code>null</code>) are <font color='darkBlue'>black</font>. </li>
         *  <li> If a node is <font color='red'>red</font>, then both its children are
         *		 <font color='darkBlue'>black</font>. </li>
         *  <li> Every path from a given node to any of its descendant NIL nodes contains the same number of
         *		 <font color='darkBlue'>black</font> nodes. Some definitions: the number of
         *		 <font color='darkBlue'>black</font> nodes from the root to a node is the node's
         *		 <font color='darkBlue'>black</font> depth; the uniform number of <font color='darkBlue'>black</font>
         *		 nodes in all paths from root to the leaves is called the <font color='darkBlue'>black</font>-height of
         *		 the red-black tree. </li>
         * </ol>
         *
         * @author Migrated by Jeongho Nam <http://samchon.org>
         */
        (function (Color) {
            /**
             * <p> Code of color black. </p>
             *
             * <ul>
             *	<li> Those are clearly black: root, leaf nodes or children nodes of red. </li>
             *	<li> Every path from a given nodes containes the same number of black nodes exclude NIL(s). </li>
             * </ul>
             */
            Color[Color["BLACK"] = 0] = "BLACK";
            /**
             * <p> Code of color red. </p>
             */
            Color[Color["RED"] = 1] = "RED";
        })(base.Color || (base.Color = {}));
        var Color = base.Color;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * <p> An abstract error instance. </p>
         *
         * <p> {@link ErrorInstance} is an abstract class of {@link ErrorCode} and {@link ErrorCondition}
         * holding an error instance's identifier {@link value}, associated with a {@link category}. </p>
         *
         * <p> The operating system and other low-level applications and libraries generate numerical error codes to
         * represent possible results. These numerical values may carry essential information for a specific platform,
         * but be non-portable from one platform to another. </p>
         *
         * <p> Objects of this class associate such numerical codes to {@link ErrorCategory error categories},
         * so that they can be interpreted when needed as more abstract (and portable)
         * {@link ErrorCondition error conditions}. </p>
         *
         * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/exceptions.png" target="_blank">
         * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
         *
         * @author Jeongho Nam <http://samchon.org>
         */
        class ErrorInstance {
            constructor(val = 0, category = null) {
                this.assign(val, category);
            }
            /**
             * <p> Assign error instance. </p>
             *
             * <p> Assigns the {@link ErrorCode} object a value of val associated with the {@link ErrorCategory}. </p>
             *
             * @param val A numerical value identifying an error instance.
             * @param category A reference to an {@link ErrorCategory} object.
             */
            assign(val, category) {
                this.category_ = category;
                this.value_ = val;
            }
            /**
             * <p> Clear error instance. </p>
             *
             * <p> Clears the value in the {@link ErrorCode} object so that it is set to a value of <i>0</i> of the
             * {@link ErrorCategory.systemCategory ErrorCategory.systemCategory()} (indicating no error). </p>
             */
            clear() {
                this.value_ = 0;
            }
            /* ---------------------------------------------------------
                ACCESSORS
            --------------------------------------------------------- */
            /**
             * <p> Get category. </p>
             *
             * <p> Returns a reference to the {@link ErrorCategory} associated with the {@link ErrorCode} object. </p>
             *
             * @return A reference to a non-copyable object of a type derived from {@link ErrorCategory}.
             */
            category() {
                return this.category_;
            }
            /**
             * <p> Error value. </p>
             *
             * <p> Returns the error value associated with the {@link ErrorCode} object. </p>
             *
             * @return The error value.
             */
            value() {
                return this.value_;
            }
            /**
             * <p> Get message. </p>
             *
             * <p> Returns the message associated with the error instance. </p>
             *
             * <p> Error messages are defined by the {@link category} the error instance belongs to. </p>
             *
             * <p> This function returns the same as if the following member was called: </p>
             *
             * <p> <code>category().message(value())</code> </p>
             *
             * @return A string object with the message associated with the {@link ErrorCode}.
             */
            message() {
                if (this.category_ == null || this.value_ == 0)
                    return "";
                else
                    return this.category_.message(this.value_);
            }
            /**
             * <p> Default error condition. </p>
             *
             * <p> Returns the default {@link ErrorCondition}object associated with the {@link ErrorCode} object. </p>
             *
             * <p> This function returns the same as if the following member was called: </p>
             *
             * <p> <code>category().default_error_condition(value())</code> </p>
             *
             * <p> {@link ErrorCategory.default_error_condition ErrorCategory.default_error_condition()}
             * is a virtual member function, that can operate differently for each category. </p>
             *
             * @return An {@link ErrorCondition}object that corresponds to the {@link ErrorCode} object.
             */
            default_error_condition() {
                if (this.category_ == null || this.value_ == 0)
                    return null;
                else
                    return this.category_.default_error_condition(this.value_);
            }
            /* ---------------------------------------------------------
                OPERATORS
            --------------------------------------------------------- */
            /**
             * <p> Convert to bool. </p>
             *
             * <p> Returns whether the error instance has a numerical {@link value} other than 0. </p>
             *
             * <p> If it is zero (which is generally used to represent no error), the function returns false, otherwise it returns true. </p>
             *
             * @return <code>true</code> if the error's numerical value is not zero.
             *		   <code>false</code> otherwise.
             */
            to_bool() {
                return this.value_ != 0;
            }
        }
        base.ErrorInstance = ErrorInstance;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        (function (Hash) {
            Hash[Hash["MIN_SIZE"] = 10] = "MIN_SIZE";
            Hash[Hash["RATIO"] = 1] = "RATIO";
            Hash[Hash["MAX_RATIO"] = 2] = "MAX_RATIO";
        })(base.Hash || (base.Hash = {}));
        var Hash = base.Hash;
        /**
         * <p> Hask buckets. </p>
         *
         * @author Jeongho Nam <http://samchon.org>
         */
        class HashBuckets {
            /* ---------------------------------------------------------
                CONSTRUCTORS
            --------------------------------------------------------- */
            /**
             * Default Constructor.
             */
            constructor() {
                this.clear();
            }
            /**
             * <p> Reconstruction of hash table. </p>
             *
             * <p> All the elements in the hash buckets are rearranged according to their hash value into the new set of
             * buckets. This may alter the order of iteration of elements within the container. </p>
             *
             * <p> Notice that {@link rehash rehashes} are automatically performed whenever its number of elements is going
             * to greater than its own {@link capacity}. </p>
             *
             * @param size Number of bucket size to rehash.
             */
            rehash(size) {
                if (size < Hash.MIN_SIZE)
                    size = Hash.MIN_SIZE;
                let prev_matrix = this.buckets_;
                this.buckets_ = new std.Vector();
                for (let i = 0; i < size; i++)
                    this.buckets_.push_back(new std.Vector());
                for (let i = 0; i < prev_matrix.size(); i++)
                    for (let j = 0; j < prev_matrix.at(i).size(); j++) {
                        let val = prev_matrix.at(i).at(j);
                        let bucket = this.buckets_.at(this.hash_index(val));
                        bucket.push_back(val);
                        this.item_size_++;
                    }
            }
            clear() {
                this.buckets_ = new std.Vector();
                this.item_size_ = 0;
                for (let i = 0; i < Hash.MIN_SIZE; i++)
                    this.buckets_.push_back(new std.Vector());
            }
            /* ---------------------------------------------------------
                ACCESSORS
            --------------------------------------------------------- */
            size() {
                return this.buckets_.size();
            }
            item_size() {
                return this.item_size_;
            }
            capacity() {
                return this.buckets_.size() * Hash.MAX_RATIO;
            }
            at(index) {
                return this.buckets_.at(index);
            }
            hash_index(val) {
                return std.hash(val) % this.buckets_.size();
            }
            /* ---------------------------------------------------------
                ELEMENTS I/O
            --------------------------------------------------------- */
            insert(val) {
                this.buckets_.at(this.hash_index(val)).push_back(val);
                if (++this.item_size_ > this.capacity())
                    this.rehash(this.item_size_ * Hash.RATIO);
            }
            erase(val) {
                let bucket = this.buckets_.at(this.hash_index(val));
                for (let i = 0; i < bucket.size(); i++)
                    if (bucket.at(i) == val) {
                        bucket.splice(i, 1);
                        this.item_size_--;
                        break;
                    }
            }
        }
        base.HashBuckets = HashBuckets;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
/// <reference path="../API.ts" />
/// <reference path="../API.ts" />
/// <reference path="../API.ts" />
/// <reference path="../API.ts" />
/// <reference path="ListContainer.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * <p> An abstract map. </p>
         *
         * <p> {@link MapContainer MapContainers} are associative containers that store elements formed by a combination
         * of a <i>key value</i> (<i>Key</i>) and a <i>mapped value</i> (<i>T</i>), and which allows for fast retrieval
         * of individual elements based on their keys. </p>
         *
         * <p> In a {@link MapContainer}, the <i>key values</i> are generally used to identify the elements, while the
         * <i>mapped values</i> store the content associated to this key. The types of <i>key</i> and
         * <i>mapped value</i> may differ, and are grouped together in member type <i>value_type</i>, which is a
         * {@link Pair} type combining both: </p>
         *
         * <p> <code>typedef pair<const Key, T> value_type;</code> </p>
         *
         * <p> {@link MapContainer} stores elements, keeps sequence and enables indexing by inserting elements into a
         * {@link List} and registering {@link ListIterator iterators} of the {@link data_ list container} to an index
         * table like {@link RBTree tree} or {@link HashBuckets hash-table}. </p>
         *
         * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram" target="_blank">
         * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram" style="max-width: 100%" /></a> </p>
         *
         * <h3> Container properties </h3>
         * <dl>
         *	<dt> Associative </dt>
         *	<dd>
         *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute position
         *		in the container.
         *	</dd>
         *
         *	<dt> Map </dt>
         *	<dd>
         *		Each element associates a <i>key</i> to a <i>mapped value</i>:
         *		<i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>.
         *	</dd>
         * </dl>
         *
         * @param <Key> Type of the keys. Each element in a map is identified by its key value.
         * @param <T> Type of the mapped value. Each element in a map stores some data as its mapped value.
         *
         * @author Jeongho Nam <http://samchon.org>
         */
        class MapContainer extends base.Container {
            /* ---------------------------------------------------------
                CONSTURCTORS
            --------------------------------------------------------- */
            /**
             * Default Constructor.
             */
            constructor() {
                super();
                this.data_ = new MapElementList(this);
            }
            /**
             * @inheritdoc
             */
            assign(first, last) {
                // INSERT
                this.clear();
                this.insert(first, last);
            }
            /**
             * @inheritdoc
             */
            clear() {
                // TO BE ABSTRACT
                this.data_.clear();
            }
            /**
             * <p> Return iterator to beginning. </p>
             *
             * <p> Returns an iterator referring the first element in the  </p>
             *
             * <h4> Note </h4>
             * <p> If the container is {@link empty}, the returned iterator is same with {@link end end()}. </p>
             *
             * @return An iterator to the first element in the  The iterator containes the first element's value.
             */
            begin() {
                return this.data_.begin();
            }
            /**
             * <p> Return iterator to end. </p>
             * <p> Returns an iterator referring to the past-the-end element in the  </p>
             *
             * <p> The past-the-end element is the theoretical element that would follow the last element in the
             *  It does not point to any element, and thus shall not be dereferenced. </p>
             *
             * <p> Because the ranges used by functions of the container do not include the element reference by their
             * closing iterator, this function is often used in combination with {@link MapContainer}.{@link begin} to
             * specify a range including all the elements in the  </p>
             *
             * <h4> Note </h4>
             * <p> Returned iterator from {@link MapContainer}.{@link end} does not refer any element. Trying to accessing
             * element by the iterator will cause throwing exception ({@link OutOfRange}). </p>
             *
             * <p> If the container is {@link empty}, this function returns the same as {@link begin}. </p>
             *
             * @return An iterator to the end element in the
             */
            end() {
                return this.data_.end();
            }
            /**
             * <p> Return {@link MapReverseIterator reverse iterator} to <i>reverse beginning</i>. </p>
             *
             * <p> Returns a {@link MapReverseIterator reverse iterator} pointing to the last element in the container
             * (i.e., its <i>reverse beginning</i>). </p>
             *
             * {@link MapReverseIterator Reverse iterators} iterate backwards: increasing them moves them towards the
             * beginning of the container. </p>
             *
             * <p> {@link rbegin} points to the element preceding the one that would be pointed to by member {@link end}.
             * </p>7
             *
             * @return A {@link MapReverseIterator reverse iterator} to the <i>reverse beginning</i> of the sequence
             *
             */
            rbegin() {
                return new std.MapReverseIterator(this.end());
            }
            /**
             * <p> Return {@link MapReverseIterator reverse iterator} to <i>reverse end</i>. </p>
             *
             * <p> Returns a {@link MapReverseIterator reverse iterator} pointing to the theoretical element right before
             * the first element in the {@link MapContainer map container} (which is considered its <i>reverse end</i>).
             * </p>
             *
             * <p> The range between {@link MapContainer}.{@link rbegin} and {@link MapContainer}.{@link rend} contains
             * all the elements of the container (in reverse order). </p>
             *
             * @return A {@link MapReverseIterator reverse iterator} to the <i>reverse end</i> of the sequence
             */
            rend() {
                return new std.MapReverseIterator(this.begin());
            }
            /**
             * @inheritdoc
             */
            next() {
                return this.data_.next();
            }
            /* ---------------------------------------------------------
                ELEMENTS
            --------------------------------------------------------- */
            /**
             * <p> Whether have the item or not. </p>
             *
             * <p> Indicates whether a map has an item having the specified identifier. </p>
             *
             * @param key Key value of the element whose mapped value is accessed.
             *
             * @return Whether the map has an item having the specified identifier.
             */
            has(key) {
                return !this.find(key).equal_to(this.end());
            }
            /**
             * Return the number of elements in the map.
             */
            size() {
                return this.data_.size();
            }
            push(...args) {
                // TO BE ABSTRACT
                for (let i = 0; i < args.length; i++)
                    if (args[i] instanceof std.Pair)
                        this._Insert_by_pair(args[i]);
                    else if (args[i] instanceof Array)
                        this.insert_by_tuple(args[i]);
                return this.size();
            }
            emplace_hint(hint, ...args) {
                if (args.length == 1)
                    return this.insert(hint, args[0]);
                else
                    return this.insert(hint, std.make_pair(args[0], args[1]));
            }
            insert(...args) {
                if (args.length == 1 && args[0] instanceof std.Pair) {
                    return this._Insert_by_pair(args[0]);
                }
                else if (args.length == 1 && args[0] instanceof Array) {
                    return this.insert_by_tuple(args[0]);
                }
                else if (args.length == 2 && args[0] instanceof std.Iterator && args[1] instanceof std.Iterator) {
                    return this._Insert_by_range(args[0], args[1]);
                }
                else {
                    let ret;
                    let is_reverse_iterator = false;
                    // REVERSE_ITERATOR TO ITERATOR
                    if (args[0] instanceof std.MapReverseIterator) {
                        is_reverse_iterator = true;
                        args[0] = args[0].base().prev();
                    }
                    // INSERT AN ELEMENT
                    if (args[1] instanceof std.Pair)
                        ret = this._Insert_by_hint(args[0], args[1]);
                    else
                        ret = this.insert_by_hint_with_tuple(args[0], args[1]);
                    // RETURN BRANCHES
                    if (is_reverse_iterator == true)
                        return new std.MapReverseIterator(ret.next());
                    else
                        return ret;
                }
            }
            /**
             * @hidden
             */
            insert_by_tuple(tuple) {
                return this._Insert_by_pair(new std.Pair(tuple[0], tuple[1]));
            }
            /**
             * @hidden
             */
            insert_by_hint_with_tuple(hint, tuple) {
                return this._Insert_by_hint(hint, std.make_pair(tuple[0], tuple[1]));
            }
            erase(...args) {
                if (args.length == 1 && (args[0] instanceof std.Iterator == false || args[0].get_source() != this))
                    return this.erase_by_key(args[0]);
                else if (args.length == 1)
                    return this.erase_by_iterator(args[0]);
                else
                    return this.erase_by_iterator(args[0], args[1]);
            }
            /**
             * @hidden
             */
            erase_by_key(key) {
                let it = this.find(key);
                if (it.equal_to(this.end()) == true)
                    return 0;
                this.erase_by_iterator(it);
                return 1;
            }
            /**
             * @hidden
             */
            erase_by_iterator(first, last = first.next()) {
                let ret;
                let is_reverse_iterator = false;
                // REVERSE ITERATOR TO ITERATOR
                if (first instanceof std.MapReverseIterator) {
                    is_reverse_iterator = true;
                    let first_it = last.base();
                    let last_it = first.base();
                    first = first_it;
                    last = last_it;
                }
                // ERASE ELEMENTS
                ret = this.erase_by_range(first, last);
                // RETURN BRANCHES
                if (is_reverse_iterator == true)
                    return new std.MapReverseIterator(ret.next());
                else
                    return ret;
            }
            /**
             * @hidden
             */
            erase_by_range(first, last) {
                // ERASE
                let it = this.data_.erase(first, last);
                // POST-PROCESS
                this._Handle_erase(first, last);
                return it;
            }
            /* ---------------------------------------------------------
                UTILITY
            --------------------------------------------------------- */
            /**
             * @hidden
             */
            _Swap(obj) {
                [this.data_, obj.data_] = [obj.data_, this.data_];
            }
        }
        base.MapContainer = MapContainer;
        /**
         * @hidden
         */
        class MapElementList extends base.ListContainer {
            constructor(associative) {
                super();
                this.associative_ = associative;
            }
            _Create_iterator(prev, next, val) {
                return new std.MapIterator(this, prev, next, val);
            }
            get_associative() {
                return this.associative_;
            }
            rbegin() {
                return new std.MapReverseIterator(this.end());
            }
            rend() {
                return new std.MapReverseIterator(this.begin());
            }
        }
        base.MapElementList = MapElementList;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
var std;
(function (std) {
    /**
     * <p> An iterator of {@link MapContainer map container}. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram" style="max-width: 100%" /></a> </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class MapIterator extends std.base.ListIteratorBase {
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        /**
         * Construct from the {@link MapContainer source map} and {@link ListIterator list iterator}.
         *
         * @param source The source {@link MapContainer}.
         * @param list_iterator A {@link ListIterator} pointing {@link Pair} of <i>key</i> and <i>value</i>.
         */
        constructor(source, prev, next, val) {
            super(source, prev, next, val);
        }
        /* ---------------------------------------------------------
            MOVERS
        --------------------------------------------------------- */
        /**
         * Get iterator to previous element.
         */
        prev() {
            return this["prev_"];
        }
        /**
         * Get iterator to next element.
         */
        next() {
            return this["next_"];
        }
        /**
         * Advances the Iterator by n element positions.
         *
         * @param step Number of element positions to advance.
         * @return An advanced Iterator.
         */
        advance(step) {
            return super.advance(step);
        }
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * @hidden
         */
        get_source() {
            return super.get_source().get_associative();
        }
        /**
         * Get first, key element.
         */
        get first() {
            return this.value.first;
        }
        /**
         * Get second, value element.
         */
        get second() {
            return this.value.second;
        }
        /**
         * Set second value.
         */
        set second(val) {
            this.value.second = val;
        }
        /* ---------------------------------------------------------
            COMPARISONS
        --------------------------------------------------------- */
        /**
         * <p> Whether an iterator is equal with the iterator. </p>
         *
         * <p> Compare two iterators and returns whether they are equal or not. </p>
         *
         * @param obj An iterator to compare
         * @return Indicates whether equal or not.
         */
        equal_to(obj) {
            return super.equal_to(obj);
        }
        less(obj) {
            return std.less(this.first, obj.first);
        }
        hash() {
            return std.hash(this.first);
        }
        swap(obj) {
            super.swap(obj);
        }
    }
    std.MapIterator = MapIterator;
    /**
     * <p> A reverse-iterator of {@link MapContainer map container}. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram" style="max-width: 100%" /></a> </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class MapReverseIterator extends std.ReverseIterator {
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        /**
         * Construct from base iterator.
         *
         * @param base A reference of the base iterator, which iterates in the opposite direction.
         */
        constructor(base) {
            super(base);
        }
        /**
         * @hidden
         */
        _Create_neighbor(base) {
            return new MapReverseIterator(base);
        }
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * Get first, key element.
         */
        get first() {
            return this.base_.first;
        }
        /**
         * Get second, value element.
         */
        get second() {
            return this.base_.second;
        }
        /**
         * Set second value.
         */
        set second(val) {
            this.base_.second = val;
        }
    }
    std.MapReverseIterator = MapReverseIterator;
})(std || (std = {}));
/// <reference path="../API.ts" />
/// <reference path="HashBuckets.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * <p> Hash buckets storing {@link MapIterator MapIterators}. </p>
         *
         * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/map_containers.png" target="_blank">
         * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/map_containers.png" style="max-width: 100%" /> </a>
         * </p>
         *
         * @author Jeongho Nam <http://samchon.org>
         */
        class MapHashBuckets extends base.HashBuckets {
            constructor(map) {
                super();
                this.map = map;
            }
            find(key) {
                let index = std.hash(key) % this.size();
                let bucket = this.at(index);
                for (let i = 0; i < bucket.size(); i++)
                    if (std.equal_to(bucket.at(i).first, key))
                        return bucket.at(i);
                return this.map.end();
            }
        }
        base.MapHashBuckets = MapHashBuckets;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
/// <reference path="MapContainer.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * <p> An abstract multi-map. </p>
         *
         * <p> {@link MultiMap MultiMaps} are associative containers that store elements formed by a combination of a
         * <i>key value</i> (<i>Key</i>) and a <i>mapped value</i> (<i>T</i>), and which allows for fast retrieval of
         * individual elements based on their keys. </p>
         *
         * <p> In a {@link MapContainer}, the <i>key values</i> are generally used to identify the elements, while the
         * <i>mapped values</i> store the content associated to this <i>key</i>. The types of <i>key</i> and
         * <i>mapped value</i> may differ, and are grouped together in member type <i>value_type</i>, which is a
         * {@link Pair} type combining both: </p>
         *
         * <p> <code>typedef pair<const Key, T> value_type;</code> </p>
         *
         * <p> {@link UniqueMap} stores elements, keeps sequence and enables indexing by inserting elements into a
         * {@link List} and registering {@link ListIterator iterators} of the {@link data_ list container} to an index
         * table like {@link RBTree tree} or {@link HashBuckets hash-table}. </p>
         *
         * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/map_containers.png" target="_blank">
         * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/map_containers.png" style="max-width: 100%" /></a> </p>
         *
         * <h3> Container properties </h3>
         * <dl>
         *	<dt> Associative </dt>
         *	<dd>
         *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute position
         *		in the container.
         *	</dd>
         *
         *	<dt> Map </dt>
         *	<dd>
         *		Each element associates a <i>key</i> to a <i>mapped value</i>:
         *		<i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>.
         *	</dd>
         *
         *	<dt> Multiple equivalent keys </dt>
         *	<dd> Multiple elements in the container can have equivalent <i>keys</i>. </dd>
         * </dl>
         *
         * @param <Key> Type of the keys. Each element in a map is identified by its key value.
         * @param <T> Type of the mapped value. Each element in a map stores some data as its mapped value.
         *
         * @author Jeongho Nam <http://samchon.org>
         */
        class MultiMap extends base.MapContainer {
            emplace(...args) {
                if (args.length == 1)
                    return this._Insert_by_pair(args[0]);
                else
                    return this._Insert_by_pair(std.make_pair(args[0], args[1]));
            }
            insert(...args) {
                return super.insert.apply(this, args);
            }
            /* ---------------------------------------------------------
                UTILITY
            --------------------------------------------------------- */
            /**
             * @inheritdoc
             */
            merge(source) {
                this.insert(source.begin(), source.end());
                source.clear();
            }
        }
        base.MultiMap = MultiMap;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
/// <reference path="ListContainer.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * <p> An abstract set. </p>
         *
         * <p> {@link SetContainer SetContainers} are containers that store elements allowing fast retrieval of
         * individual elements based on their value. </p>
         *
         * <p> In an {@link SetContainer}, the value of an element is at the same time its <i>key</i>, used to
         * identify it. <i>Keys</i> are immutable, therefore, the elements in an {@link SetContainer} cannot be
         * modified once in the container - they can be inserted and removed, though. </p>
         *
         * <p> {@link SetContainer} stores elements, keeps sequence and enables indexing by inserting elements into a
         * {@link List} and registering {@link ListIterator iterators} of the {@link data_ list container} to an index
         * table like {@link RBTree tree} or {@link HashBuckets hash-table}. </p>
         *
         * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/set_containers.png" target="_blank">
         * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/set_containers.png" style="max-width: 100%" /></a> </p>
         *
         * <h3> Container properties </h3>
         * <dl>
         *	<dt> Associative </dt>
         *	<dd>
         *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute
         *		position in the container.
         *	</dd>
         *
         *	<dt> Set </dt>
         *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
         * </dl>
         *
         * @param <T> Type of the elements. Each element in a {@link SetContainer} container is also identified
         *			  by this value (each value is itself also the element's <i>key</i>).
         *
         * @author Jeongho Nam <http://samchon.org>
         */
        class SetContainer extends base.Container {
            /* ---------------------------------------------------------
                CONSTURCTORS
            --------------------------------------------------------- */
            /**
             * Default Constructor.
             */
            constructor() {
                super();
                this.data_ = new SetElementList(this);
            }
            /**
             * @inheritdoc
             */
            assign(begin, end) {
                // INSERT
                this.clear();
                this.insert(begin, end);
            }
            /**
             * @inheritdoc
             */
            clear() {
                // TO BE ABSTRACT
                this.data_.clear();
            }
            /**
             * @inheritdoc
             */
            begin() {
                return this.data_.begin();
            }
            /**
             * @inheritdoc
             */
            end() {
                return this.data_.end();
            }
            /**
             * @inheritdoc
             */
            rbegin() {
                return new std.SetReverseIterator(this.end());
            }
            /**
             * @inheritdoc
             */
            rend() {
                return new std.SetReverseIterator(this.begin());
            }
            /**
             * @inheritdoc
             */
            next() {
                return this.data_.next();
            }
            /* ---------------------------------------------------------
                ELEMENTS
            --------------------------------------------------------- */
            /**
             * <p> Whether have the item or not. </p>
             *
             * <p> Indicates whether a set has an item having the specified identifier. </p>
             *
             * @param key Key value of the element whose mapped value is accessed.
             *
             * @return Whether the set has an item having the specified identifier.
             */
            has(val) {
                return !this.find(val).equal_to(this.end());
            }
            /**
             * @inheritdoc
             */
            size() {
                return this.data_.size();
            }
            ///**
            // * @hidden
            // */
            //protected _Get_data(): List<T>
            //{
            //	return this.data_;
            //}
            /* =========================================================
                ELEMENTS I/O
                    - INSERT
                    - ERASE
                    - UTILITY
                    - POST-PROCESS
            ============================================================
                INSERT
            --------------------------------------------------------- */
            /**
             * @inheritdoc
             */
            push(...args) {
                // TO BE ABSTRACT
                for (let i = 0; i < args.length; i++)
                    this._Insert_by_val(args[i]);
                return this.size();
            }
            insert(...args) {
                if (args.length == 1)
                    return this._Insert_by_val(args[0]);
                else if (args.length == 2 && args[0] instanceof std.Iterator) {
                    if (args[1] instanceof std.Iterator && args[0].get_source() != this && args[1].get_source() != this) {
                        // IT DOESN'T CONTAIN POSITION
                        // RANGES TO INSERT ONLY
                        return this._Insert_by_range(args[0], args[1]);
                    }
                    else {
                        let ret;
                        let is_reverse_iterator = false;
                        // REVERSE_ITERATOR TO ITERATOR
                        if (args[0] instanceof std.SetReverseIterator) {
                            is_reverse_iterator = true;
                            args[0] = args[0].base().prev();
                        }
                        // INSERT AN ELEMENT
                        ret = this._Insert_by_hint(args[0], args[1]);
                        // RETURN BRANCHES
                        if (is_reverse_iterator == true)
                            return new std.SetReverseIterator(ret.next());
                        else
                            return ret;
                    }
                }
            }
            erase(...args) {
                if (args.length == 1 && (args[0] instanceof std.Iterator == false || args[0].get_source() != this))
                    return this.erase_by_val(args[0]);
                else if (args.length == 1)
                    return this.erase_by_iterator(args[0]);
                else
                    return this.erase_by_iterator(args[0], args[1]);
            }
            /**
             * @hidden
             */
            erase_by_iterator(first, last = first.next()) {
                let ret;
                let is_reverse_iterator = false;
                // REVERSE ITERATOR TO ITERATOR
                if (first instanceof std.SetReverseIterator) {
                    is_reverse_iterator = true;
                    let first_it = last.base();
                    let last_it = first.base();
                    first = first_it;
                    last = last_it;
                }
                // ERASE ELEMENTS
                ret = this.erase_by_range(first, last);
                // RETURN BRANCHES
                if (is_reverse_iterator == true)
                    return new std.SetReverseIterator(ret.next());
                else
                    return ret;
            }
            /**
             * @hidden
             */
            erase_by_val(val) {
                // TEST WHETHER EXISTS
                let it = this.find(val);
                if (it.equal_to(this.end()) == true)
                    return 0;
                // ERASE
                this.erase_by_iterator(it);
                return 1;
            }
            /**
             * @hidden
             */
            erase_by_range(first, last) {
                // ERASE
                let it = this.data_.erase(first, last);
                // POST-PROCESS
                this._Handle_erase(first, last);
                return it;
            }
            /* ---------------------------------------------------------
                UTILITY
            --------------------------------------------------------- */
            /**
             * @hidden
             */
            _Swap(obj) {
                [this.data_, obj.data_] = [obj.data_, this.data_];
            }
        }
        base.SetContainer = SetContainer;
        /**
         * @hidden
         */
        class SetElementList extends base.ListContainer {
            constructor(associative) {
                super();
                this.associative_ = associative;
            }
            _Create_iterator(prev, next, val) {
                return new std.SetIterator(this, prev, next, val);
            }
            get_associative() {
                return this.associative_;
            }
            rbegin() {
                return new std.SetReverseIterator(this.end());
            }
            rend() {
                return new std.SetReverseIterator(this.begin());
            }
        }
        base.SetElementList = SetElementList;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
var std;
(function (std) {
    /**
     * <p> An iterator of a Set. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/set_containers.png" style="max-width: 100%" /></a> </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class SetIterator extends std.base.ListIteratorBase {
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        /**
         * <p> Construct from source and index number. </p>
         *
         * <h4> Note </h4>
         * <p> Do not create iterator directly. </p>
         * <p> Use begin(), find() or end() in Map instead. </p>
         *
         * @param map The source Set to reference.
         * @param index Sequence number of the element in the source Set.
         */
        constructor(source, prev, next, val) {
            super(source, prev, next, val);
        }
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        get_source() {
            return super.get_source().get_associative();
        }
        /**
         * @inheritdoc
         */
        prev() {
            return this["prev_"];
        }
        /**
         * @inheritdoc
         */
        next() {
            return this["next_"];
        }
        /**
         * @inheritdoc
         */
        advance(size) {
            return super.advance(size);
        }
        /* ---------------------------------------------------------
            COMPARISONS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        equal_to(obj) {
            return super.equal_to(obj);
        }
        /**
         * @inheritdoc
         */
        less(obj) {
            return std.less(this.value, obj.value);
        }
        /**
         * @inheritdoc
         */
        hash() {
            return std.hash(this.value);
        }
        /**
         * @inheritdoc
         */
        swap(obj) {
            super.swap(obj);
        }
    }
    std.SetIterator = SetIterator;
    /**
     * <p> A reverse-iterator of Set. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/set_containers.png" style="max-width: 100%" /></a> </p>
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class SetReverseIterator extends std.ReverseIterator {
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        /**
         * Construct from base iterator.
         *
         * @param base A reference of the base iterator, which iterates in the opposite direction.
         */
        constructor(base) {
            super(base);
        }
        /**
         * @hidden
         */
        _Create_neighbor(base) {
            return new SetReverseIterator(base);
        }
    }
    std.SetReverseIterator = SetReverseIterator;
})(std || (std = {}));
/// <reference path="../API.ts" />
/// <reference path="SetContainer.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * <p> An abstract set. </p>
         *
         * <p> {@link SetContainer SetContainers} are containers that store elements allowing fast retrieval of
         * individual elements based on their value. </p>
         *
         * <p> In an {@link SetContainer}, the value of an element is at the same time its <i>key</i>, used to
         * identify it. <i>Keys</i> are immutable, therefore, the elements in an {@link SetContainer} cannot be
         * modified once in the container - they can be inserted and removed, though. </p>
         *
         * <p> {@link SetContainer} stores elements, keeps sequence and enables indexing by inserting elements into a
         * {@link List} and registering {@link ListIterator iterators} of the {@link data_ list container} to an index
         * table like {@link RBTree tree} or {@link HashBuckets hash-table}. </p>
         *
         * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/set_containers.png" target="_blank">
         * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/set_containers.png" style="max-width: 100%" /></a> </p>
         *
         * <h3> Container properties </h3>
         * <dl>
         *	<dt> Associative </dt>
         *	<dd>
         *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute
         *		position in the container.
         *	</dd>
         *
         *	<dt> Set </dt>
         *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
         *
         *	<dt> Multiple equivalent keys </dt>
         *	<dd> Multiple elements in the container can have equivalent <i>keys</i>. </dd>
         * </dl>
         *
         * @param <T> Type of the elements. Each element in a {@link SetContainer} container is also identified
         *			  by this value (each value is itself also the element's <i>key</i>).
         *
         * @author Jeongho Nam <http://samchon.org>
         */
        class MultiSet extends base.SetContainer {
            insert(...args) {
                return super.insert.apply(this, args);
            }
            /* ---------------------------------------------------------
                UTILITY
            --------------------------------------------------------- */
            /**
             * @inheritdoc
             */
            merge(source) {
                this.insert(source.begin(), source.end());
                source.clear();
            }
        }
        base.MultiSet = MultiSet;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
/// <reference path="XTree.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * <p> A red-black tree storing {@link MapIterator MapIterators}. </p>
         *
         * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/map_containers.png" target="_blank">
         * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/map_containers.png" style="max-width: 100%" /></a> </p>
         *
         * @author Jeongho Nam <http://samchon.org>
         */
        class PairTree extends base.XTree {
            /* ---------------------------------------------------------
                CONSTRUCTOR
            --------------------------------------------------------- */
            /**
             * Default Constructor.
             */
            constructor(map, compare = std.less) {
                super();
                this.map_ = map;
                this.compare_ = compare;
            }
            find(val) {
                if (val instanceof std.MapIterator && val.first instanceof std.SetIterator == false)
                    return super.find(val);
                else
                    return this.find_by_key(val);
            }
            /**
             * @hidden
             */
            find_by_key(key) {
                if (this.root_ == null)
                    return null;
                let node = this.root_;
                while (true) {
                    let newNode = null;
                    if (std.equal_to(key, node.value.first))
                        break; // EQUALS, MEANS MATCHED, THEN TERMINATE
                    else if (this.compare_(key, node.value.first))
                        newNode = node.left; // LESS, THEN TO THE LEFT
                    else
                        newNode = node.right; // GREATER, THEN TO THE RIGHT
                    // ULTIL CHILD NODE EXISTS
                    if (newNode == null)
                        break;
                    // SHIFT A NEW NODE TO THE NODE TO BE RETURNED
                    node = newNode;
                }
                return node;
            }
            /* ---------------------------------------------------------
                BOUNDS
            --------------------------------------------------------- */
            /**
             * <p> Return iterator to lower bound. </p>
             *
             * <p> Returns an iterator pointing to the first element in the container whose key is not considered to
             * go before <i>k</i> (i.e., either it is equivalent or goes after). </p>
             *
             * <p> The function uses its internal comparison object (key_comp) to determine this, returning an
             * iterator to the first element for which key_comp(<i>k</i>, element_key) would return false. </p>
             *
             * <p> If the {@link ITreeMap} class is instantiated with the default comparison type ({@link less}),
             * the function returns an iterator to the first element whose key is not less than <i>k</i> </p>.
             *
             * <p> A similar member function, {@link upper_bound}, has the same behavior as {@link lower_bound}, except
             * in the case that the {@link ITreeMap} contains an element with a key equivalent to <i>k</i>: In this
             * case, {@link lower_bound} returns an iterator pointing to that element, whereas {@link upper_bound}
             * returns an iterator pointing to the next element. </p>
             *
             * @param k Key to search for.
             *
             * @return An iterator to the the first element in the container whose key is not considered to go before
             *		   <i>k</i>, or {@link ITreeMap.end} if all keys are considered to go before <i>k</i>.
             */
            lower_bound(key) {
                let node = this.find(key);
                if (node == null)
                    return this.map_.end();
                else if (this.compare_(node.value.first, key))
                    return node.value.next();
                else {
                    let it = node.value;
                    while (!std.equal_to(it, this.map_.end()) && this.compare_(it.first, key))
                        it = it.next();
                    return it;
                }
            }
            /**
             * <p> Return iterator to upper bound. </p>
             *
             * <p> Returns an iterator pointing to the first element in the container whose key is considered to
             * go after <i>k</i> </p>.
             *
             * <p> The function uses its internal comparison object (key_comp) to determine this, returning an
             * iterator to the first element for which key_comp(<i>k</i>, element_key) would return true. </p>
             *
             * <p> If the {@link ITreeMap} class is instantiated with the default comparison type ({@link less}),
             * the function returns an iterator to the first element whose key is greater than <i>k</i> </p>.
             *
             * <p> A similar member function, {@link lower_bound}, has the same behavior as {@link upper_bound}, except
             * in the case that the map contains an element with a key equivalent to <i>k</i>: In this case
             * {@link lower_bound} returns an iterator pointing to that element, whereas {@link upper_bound} returns an
             * iterator pointing to the next element. </p>
             *
             * @param k Key to search for.
             *
             * @return An iterator to the the first element in the container whose key is considered to go after
             *		   <i>k</i>, or {@link TreeMap.end end} if no keys are considered to go after <i>k</i>.
             */
            upper_bound(key) {
                let node = this.find(key);
                if (node == null)
                    return this.map_.end();
                else {
                    let it = node.value;
                    while (!std.equal_to(it, this.map_.end()) && (std.equal_to(it.first, key) || this.compare_(it.first, key)))
                        it = it.next();
                    return it;
                }
            }
            /**
             * <p> Get range of equal elements. </p>
             *
             * <p> Returns the bounds of a range that includes all the elements in the container which have a key
             * equivalent to <i>k</i> </p>.
             *
             * <p> If no matches are found, the range returned has a length of zero, with both iterators pointing to
             * the first element that has a key considered to go after <i>k</i> according to the container's internal
             * comparison object (key_comp). </p>
             *
             * <p> Two keys are considered equivalent if the container's comparison object returns false reflexively
             * (i.e., no matter the order in which the keys are passed as arguments). </p>
             *
             * @param k Key to search for.
             *
             * @return The function returns a {@link Pair}, whose member {@link Pair.first} is the lower bound of
             *		   the range (the same as {@link lower_bound}), and {@link Pair.second} is the upper bound
             *		   (the same as {@link upper_bound}).
             */
            equal_range(key) {
                return std.make_pair(this.lower_bound(key), this.upper_bound(key));
            }
            /* ---------------------------------------------------------
                COMPARISON
            --------------------------------------------------------- */
            /**
             * <p> Return key comparison function. </p>
             *
             * <p> Returns a references of the comparison function used by the container to compare <i>keys</i>. </p>
             *
             * <p> The <i>comparison object</i> of a {@link ITreeMap tree-map object} is set on
             * {@link TreeMap.constructor construction}. Its type (<i>Key</i>) is the last parameter of the
             * {@link ITreeMap.constructor constructors}. By default, this is a {@link less} function, which returns the same
             * as <i>operator&lt;</i>. </p>
             *
             * <p> This function determines the order of the elements in the container: it is a function pointer that takes
             * two arguments of the same type as the element <i>keys</i>, and returns <code>true</code> if the first argument
             * is considered to go before the second in the strict weak ordering it defines, and <code>false</code> otherwise.
             * </p>
             *
             * <p> Two keys are considered equivalent if {@link key_comp} returns <code>false</code> reflexively (i.e., no
             * matter the order in which the keys are passed as arguments). </p>
             *
             * @return The comparison function.
             */
            key_comp() {
                return this.compare_;
            }
            /**
             * <p> Return value comparison function. </p>
             *
             * <p> Returns a comparison function that can be used to compare two elements to get whether the key of the first
             * one goes before the second. </p>
             *
             * <p> The arguments taken by this function object are of member type <code>std.Pair<Key, T></code> (defined in
             * {@link ITreeMap}), but the mapped type (<i>T</i>) part of the value is not taken into consideration in this
             * comparison. </p>
             *
             * <p> This comparison class returns <code>true</code> if the {@link Pair.first key} of the <i>first argument</i>
             * is considered to go before that of the <i>second</i> (according to the strict weak ordering specified by the
             * container's comparison function, {@link key_comp}), and <code>false</code> otherwise. </p>
             *
             * @return The comparison function for element values.
             */
            value_comp() {
                let compare = this.compare_;
                let fn = function (x, y) {
                    return compare(x.first, y.first);
                };
                return fn;
            }
            /**
             * @inheritdoc
             */
            is_equal_to(left, right) {
                return std.equal_to(left.first, right.first);
            }
            /**
             * @inheritdoc
             */
            is_less(left, right) {
                return this.compare_(left.first, right.first);
            }
        }
        base.PairTree = PairTree;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
/// <reference path="HashBuckets.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * <p> Hash buckets storing {@link SetIterator SetIterators}. </p>
         *
         * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/set_containers.png" target="_blank">
         * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/set_containers.png" style="max-width: 100%" /> </a>
         * </p>
         *
         * @author Jeongho Nam <http://samchon.org>
         */
        class SetHashBuckets extends base.HashBuckets {
            constructor(set) {
                super();
                this.set = set;
            }
            find(val) {
                let index = std.hash(val) % this.size();
                let bucket = this.at(index);
                for (let i = 0; i < bucket.size(); i++)
                    if (std.equal_to(bucket.at(i).value, val))
                        return bucket.at(i);
                return this.set.end();
            }
        }
        base.SetHashBuckets = SetHashBuckets;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
/// <reference path="MapContainer.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * <p> An abstract unique-map. </p>
         *
         * <p> {@link UniqueMap UniqueMaps} are associative containers that store elements formed by a combination of a
         * <i>key value</i> (<i>Key</i>) and a <i>mapped value</i> (<i>T</i>), and which allows for fast retrieval of
         * individual elements based on their keys. </p>
         *
         * <p> In a {@link MapContainer}, the <i>key values</i> are generally used to uniquely identify the elements,
         * while the <i>mapped values</i> store the content associated to this key. The types of <i>key</i> and
         * <i>mapped value</i> may differ, and are grouped together in member type <i>value_type</i>, which is a
         * {@link Pair} type combining both: </p>
         *
         * <p> <code>typedef pair<const Key, T> value_type;</code> </p>
         *
         * <p> {@link UniqueMap} stores elements, keeps sequence and enables indexing by inserting elements into a
         * {@link List} and registering {@link ListIterator iterators} of the {@link data_ list container} to an index
         * table like {@link RBTree tree} or {@link HashBuckets hash-table}. </p>
         *
         * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram" target="_blank">
         * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram" style="max-width: 100%" /></a> </p>
         *
         * <h3> Container properties </h3>
         * <dl>
         *	<dt> Associative </dt>
         *	<dd>
         *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute position
         *		in the container.
         *	</dd>
         *
         *	<dt> Map </dt>
         *	<dd>
         *		Each element associates a <i>key</i> to a <i>mapped value</i>:
         *		<i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>.
         *	</dd>
         *
         *	<dt> Unique keys </dt>
         *	<dd> No two elements in the container can have equivalent <i>keys</i>. </dd>
         * </dl>
         *
         * @param <Key> Type of the keys. Each element in a map is uniquely identified by its key value.
         * @param <T> Type of the mapped value. Each element in a map stores some data as its mapped value.
         *
         * @author Jeongho Nam <http://samchon.org>
         */
        class UniqueMap extends base.MapContainer {
            /* ---------------------------------------------------------
                ACCESSORS
            --------------------------------------------------------- */
            /**
             * @inheritdoc
             */
            count(key) {
                return this.find(key).equal_to(this.end()) ? 0 : 1;
            }
            /**
             * <p> Get an element </p>
             *
             * <p> Returns a reference to the mapped value of the element identified with <i>key</i>. </p>
             *
             * @param key Key value of the element whose mapped value is accessed.
             *
             * @throw exception out of range
             *
             * @return A reference object of the mapped value (_Ty)
             */
            get(key) {
                let it = this.find(key);
                if (it.equal_to(this.end()) == true)
                    throw new std.OutOfRange("unable to find the matched key.");
                return it.second;
            }
            /**
             * <p> Set an item as the specified identifier. </p>
             *
             * <p>If the identifier is already in map, change value of the identifier. If not, then insert the object
             * with the identifier. </p>
             *
             * @param key Key value of the element whose mapped value is accessed.
             * @param val Value, the item.
             */
            set(key, val) {
                this.insert_or_assign(key, val);
            }
            emplace(...args) {
                if (args.length == 1)
                    return this._Insert_by_pair(args[0]);
                else
                    return this._Insert_by_pair(std.make_pair(args[0], args[1]));
            }
            insert(...args) {
                return super.insert.apply(this, args);
            }
            insert_or_assign(...args) {
                if (args.length == 2) {
                    return this.insert_or_assign_with_key_value(args[0], args[1]);
                }
                else if (args.length == 3) {
                    let ret;
                    let is_reverse_iterator = false;
                    // REVERSE_ITERATOR TO ITERATOR
                    if (args[0] instanceof std.MapReverseIterator) {
                        is_reverse_iterator = true;
                        args[0] = args[0].base().prev();
                    }
                    // INSERT OR ASSIGN AN ELEMENT
                    ret = this.insert_or_assign_with_hint(args[0], args[1], args[2]);
                    // RETURN BRANCHES
                    if (is_reverse_iterator == true)
                        return new std.MapReverseIterator(ret.next());
                    else
                        return ret;
                }
            }
            /**
             * @hidden
             */
            insert_or_assign_with_key_value(key, value) {
                let it = this.find(key);
                if (it.equal_to(this.end()) == true)
                    return this._Insert_by_pair(std.make_pair(key, value));
                else {
                    it.second = value;
                    return std.make_pair(it, false);
                }
            }
            /**
             * @hidden
             */
            insert_or_assign_with_hint(hint, key, value) {
                return this.insert_or_assign_with_key_value(key, value).first;
            }
            extract(param) {
                if (param instanceof std.MapIterator)
                    return this.extract_by_iterator(param);
                else if (param instanceof std.MapReverseIterator)
                    return this.extract_by_reverse_iterator(param);
                else
                    return this.extract_by_key(param);
            }
            /**
             * @hidden
             */
            extract_by_key(key) {
                let it = this.find(key);
                if (it.equal_to(this.end()) == true)
                    throw new std.OutOfRange("No such key exists.");
                let ret = it.value;
                this.erase(it);
                return ret;
            }
            /**
             * @hidden
             */
            extract_by_iterator(it) {
                if (it.equal_to(this.end()) == true)
                    return this.end();
                this.erase(it);
                return it;
            }
            /**
             * @hidden
             */
            extract_by_reverse_iterator(it) {
                this.extract_by_iterator(it.base().next());
                return it;
            }
            /* ---------------------------------------------------------
                UTILITY
            --------------------------------------------------------- */
            /**
             * Merge two maps.
             *
             * Attempts to extract each element in *source* and insert it into this container. If there's an element in this
             * container with key equivalent to the key of an element from *source*, tnen that element is not extracted from
             * the *source*. Otherwise, no element with same key exists in this container, then that element will be
             * transfered from the *source* to this container.
             *
             * @param source A {@link MapContainer map container} to transfer the elements from.
             */
            merge(source) {
                for (let it = source.begin(); !it.equal_to(source.end());) {
                    if (this.has(it.first) == false) {
                        this.insert(it.value);
                        it = source.erase(it);
                    }
                    else
                        it = it.next();
                }
            }
        }
        base.UniqueMap = UniqueMap;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
/// <reference path="SetContainer.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * <p> An abstract set. </p>
         *
         * <p> {@link SetContainer SetContainers} are containers that store elements allowing fast retrieval of
         * individual elements based on their value. </p>
         *
         * <p> In an {@link SetContainer}, the value of an element is at the same time its <i>key</i>, used to uniquely
         * identify it. <i>Keys</i> are immutable, therefore, the elements in an {@link SetContainer} cannot be modified
         * once in the container - they can be inserted and removed, though. </p>
         *
         * <p> {@link SetContainer} stores elements, keeps sequence and enables indexing by inserting elements into a
         * {@link List} and registering {@link ListIterator iterators} of the {@link data_ list container} to an index
         * table like {@link RBTree tree} or {@link HashBuckets hash-table}. </p>
         *
         * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/set_containers.png" target="_blank">
         * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/set_containers.png" style="max-width: 100%" /></a> </p>
         *
         * <h3> Container properties </h3>
         * <dl>
         *	<dt> Associative </dt>
         *	<dd>
         *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute
         *		position in the container.
         *	</dd>
         *
         *	<dt> Set </dt>
         *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
         *
         *	<dt> Unique keys </dt>
         *	<dd> No two elements in the container can have equivalent <i>keys</i>. </dd>
         * </dl>
         *
         * @param <T> Type of the elements. Each element in a {@link SetContainer} container is also identified
         *			  by this value (each value is itself also the element's <i>key</i>).
         *
         * @author Jeongho Nam <http://samchon.org>
         */
        class UniqueSet extends base.SetContainer {
            /* ---------------------------------------------------------
                ACCESSOR
            --------------------------------------------------------- */
            /**
             * @inheritdoc
             */
            count(key) {
                return this.find(key).equal_to(this.end()) ? 0 : 1;
            }
            insert(...args) {
                return super.insert.apply(this, args);
            }
            extract(param) {
                if (param instanceof std.SetIterator)
                    return this.extract_by_iterator(param);
                else if (param instanceof std.SetReverseIterator)
                    return this.extract_by_reverse_iterator(param);
                else
                    return this.extract_by_key(param);
            }
            /**
             * @hidden
             */
            extract_by_key(val) {
                let it = this.find(val);
                if (it.equal_to(this.end()) == true)
                    throw new std.OutOfRange("No such key exists.");
                this.erase(val);
                return val;
            }
            /**
             * @hidden
             */
            extract_by_iterator(it) {
                if (it.equal_to(this.end()) == true || this.has(it.value) == false)
                    return this.end();
                this.erase(it);
                return it;
            }
            /**
             * @hidden
             */
            extract_by_reverse_iterator(it) {
                this.extract_by_iterator(it.base().next());
                return it;
            }
            /* ---------------------------------------------------------
                UTILITY
            --------------------------------------------------------- */
            /**
             * Merge two sets.
             *
             * Attempts to extract each element in *source* and insert it into this container. If there's an element in this
             * container with key equivalent to the key of an element from *source*, tnen that element is not extracted from
             * the *source*. Otherwise, no element with same key exists in this container, then that element will be
             * transfered from the *source* to this container.
             *
             * @param source A {@link SetContainer set container} to transfer the elements from.
             */
            merge(source) {
                for (let it = source.begin(); !it.equal_to(source.end());) {
                    if (this.has(it.value) == false) {
                        this.insert(it.value);
                        it = source.erase(it);
                    }
                    else
                        it = it.next();
                }
            }
        }
        base.UniqueSet = UniqueSet;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
var std;
(function (std) {
    var base;
    (function (base) {
        /**
         * <p> A node in an XTree. </p>
         *
         * @param <T> Type of elements.
         *
         * @inventor Rudolf Bayer
         * @author Migrated by Jeongho Nam <http://samchon.org>
         */
        class XTreeNode {
            /* ---------------------------------------------------------
                CONSTRUCTORS
            --------------------------------------------------------- */
            /**
             * Construct from value and color of node.
             *
             * @param value Value to be stored in.
             * @param color Color of the node, red or black.
             */
            constructor(value, color) {
                this.value = value;
                this.color = color;
                this.parent = null;
                this.left = null;
                this.right = null;
            }
            /**
             * Get grand-parent.
             */
            get grand_parent() {
                return this.parent.parent;
            }
            /**
             * Get sibling, opposite side node in same parent.
             */
            get sibling() {
                if (this == this.parent.left)
                    return this.parent.right;
                else
                    return this.parent.left;
            }
            /**
             * Get uncle, parent's sibling.
             */
            get uncle() {
                return this.parent.sibling;
            }
        }
        base.XTreeNode = XTreeNode;
    })(base = std.base || (std.base = {}));
})(std || (std = {}));
/// <reference path="API.ts" />
/// <reference path="base/Container.ts" />
/// <reference path="Iterator.ts" />
var std;
(function (std) {
    /**
     * <p> Double ended queue. </p>
     *
     * <p> {@link Deque} (usually pronounced like "<i>deck</i>") is an irregular acronym of
     * <b>d</b>ouble-<b>e</b>nded <b>q</b>ueue. Double-ended queues are sequence containers with dynamic sizes that can be
     * expanded or contracted on both ends (either its front or its back). </p>
     *
     * <p> Specific libraries may implement deques in different ways, generally as some form of dynamic array. But in any
     * case, they allow for the individual elements to be accessed directly through random access iterators, with storage
     * handled automatically by expanding and contracting the container as needed. </p>
     *
     * <p> Therefore, they provide a functionality similar to vectors, but with efficient insertion and deletion of
     * elements also at the beginning of the sequence, and not only at its end. But, unlike {@link Vector Vectors},
     * {@link Deque Deques} are not guaranteed to store all its elements in contiguous storage locations: accessing
     * elements in a <u>deque</u> by offsetting a pointer to another element causes undefined behavior. </p>
     *
     * <p> Both {@link Vector}s and {@link Deque}s provide a very similar interface and can be used for similar purposes,
     * but internally both work in quite different ways: While {@link Vector}s use a single array that needs to be
     * occasionally reallocated for growth, the elements of a {@link Deque} can be scattered in different chunks of
     * storage, with the container keeping the necessary information internally to provide direct access to any of its
     * elements in constant time and with a uniform sequential interface (through iterators). Therefore,
     * {@link Deque Deques} are a little more complex internally than {@link Vector}s, but this allows them to grow more
     * efficiently under certain circumstances, especially with very long sequences, where reallocations become more
     * expensive. </p>
     *
     * <p> For operations that involve frequent insertion or removals of elements at positions other than the beginning or
     * the end, {@link Deque Deques} perform worse and have less consistent iterators and references than
     * {@link List Lists}. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /> </a>
     * </p>
     *
     * <h3> Container properties </h3>
     * <dl>
     *	<dt> Sequence </dt>
     *	<dd> Elements in sequence containers are ordered in a strict linear sequence. Individual elements
     *		 are accessed by their position in this sequence. </dd>
     *
     *	<dt> Dynamic array </dt>
     *	<dd> Generally implemented as a dynamic array, it allows direct access to any element in the
     *		 sequence and provides relatively fast addition/removal of elements at the beginning or the end
     *		 of the sequence. </dd>
     * </dl>
     *
     * @param <T> Type of the elements.
     *
     * @reference http://www.cplusplus.com/reference/deque/deque/
     * @author Jeongho Nam <http://samchon.org>
     */
    class Deque extends std.base.Container {
        constructor(...args) {
            super();
            if (args.length == 0) {
                this.clear();
            }
            if (args.length == 1 && args[0] instanceof Array) {
                let array = args[0];
                this.clear();
                this.push(...array);
            }
            else if (args.length == 1 && args[0] instanceof Deque) {
                let container = args[0];
                this.assign(container.begin(), container.end());
            }
            else if (args.length == 2 &&
                args[0] instanceof std.Iterator && args[1] instanceof std.Iterator) {
                let begin = args[0];
                let end = args[1];
                this.assign(begin, end);
            }
            this.index_ = 0;
        }
        ///
        // Row size of the {@link matrix_ matrix} which contains elements.
        // 
        // Note that the {@link ROW} affects on time complexity of accessing and inserting element. 
        // Accessing element is {@link ROW} times slower than ordinary {@link Vector} and inserting element 
        // in middle position is {@link ROW} times faster than ordinary {@link Vector}.
        // 
        // When the {@link ROW} returns 8, time complexity of accessing element is O(8) and inserting 
        // element in middle position is O(N/8). ({@link Vector}'s time complexity of accessement is O(1)
        // and inserting element is O(N)).
        /**
         * @hidden
         */
        static get ROW() { return 8; }
        ///
        // Minimum {@link capacity}.
        // 
        // Although a {@link Deque} has few elements, even no element is belonged to, the {@link Deque} 
        // keeps the minimum {@link capacity} at least.
        /**
         * @hidden
         */
        static get MIN_CAPACITY() { return 100; }
        // Get column size; {@link capacity_ capacity} / {@link ROW row}.
        /**
         * @hidden
         */
        get_col_size() {
            return Math.floor(this.capacity_ / Deque.ROW);
        }
        assign(first, second) {
            // CLEAR PREVIOUS CONTENTS
            this.clear();
            if (first instanceof std.Iterator && second instanceof std.Iterator) {
                let begin = first;
                let end = second;
                let size = 0;
                for (let it = begin; !it.equal_to(end); it = it.next())
                    size++;
                // RESERVE
                this.reserve(size);
                this.size_ = size;
                // ASSIGN CONTENTS
                let array = this.matrix_[0];
                for (let it = begin; !it.equal_to(end); it = it.next()) {
                    if (array.length >= this.get_col_size()) {
                        array = new Array();
                        this.matrix_.push(array);
                    }
                    array.push(it.value);
                }
            }
            else {
                let size = first;
                let val = second;
                // RESERVE
                this.reserve(size);
                this.size_ = size;
                // ASSIGN CONTENTS
                let array = this.matrix_[0];
                for (let i = 0; i < size; i++) {
                    if (array.length >= this.get_col_size()) {
                        array = new Array();
                        this.matrix_.push(array);
                    }
                    array.push(val);
                }
            }
        }
        /**
         * @inheritdoc
         */
        reserve(capacity) {
            // MEMORIZE
            let prevMatrix = this.matrix_;
            let prevSize = this.size_;
            // REFRESH
            this.matrix_ = new Array();
            this.matrix_.push(new Array());
            /////
            // RE-FILL
            /////
            let array = this.matrix_[0];
            for (let i = 0; i < prevMatrix.length; i++)
                for (let j = 0; j < prevMatrix[i].length; j++) {
                    if (array.length >= this.get_col_size()) {
                        array = new Array();
                        this.matrix_.push(array);
                    }
                    array.push(prevMatrix[i][j]);
                }
        }
        /**
         * @inheritdoc
         */
        clear() {
            // CLEAR CONTENTS
            this.matrix_ = new Array();
            this.matrix_.push(new Array());
            // RE-INDEX
            this.size_ = 0;
            this.capacity_ = Deque.MIN_CAPACITY;
        }
        /* =========================================================
            ACCESSORS
                - GETTERS & SETTERS
                - ITERATORS
        ========================================================= */
        /**
         * @inheritdoc
         */
        begin() {
            if (this.empty() == true)
                return this.end();
            else
                return new std.DequeIterator(this, 0);
        }
        /**
         * @inheritdoc
         */
        end() {
            return new std.DequeIterator(this, -1);
        }
        /**
         * @inheritdoc
         */
        rbegin() {
            return new std.DequeReverseIterator(this.end());
        }
        /**
         * @inheritdoc
         */
        rend() {
            return new std.DequeReverseIterator(this.begin());
        }
        /**
         * @inheritdoc
         */
        size() {
            return this.size_;
        }
        /**
         * @inheritdoc
         */
        empty() {
            return this.size_ == 0;
        }
        /**
         * @inheritdoc
         */
        capacity() {
            return this.capacity_;
        }
        /**
         * @inheritdoc
         */
        at(index) {
            if (index > this.size())
                throw new std.OutOfRange("Target index is greater than Deque's size.");
            let indexPair = this.fetch_index(index);
            return this.matrix_[indexPair.first][indexPair.second];
        }
        /**
         * @inheritdoc
         */
        set(index, val) {
            if (index > this.size())
                throw new std.OutOfRange("Target index is greater than Deque's size.");
            let indexPair = this.fetch_index(index);
            this.matrix_[indexPair.first][indexPair.second] = val;
        }
        /**
         * @inheritdoc
         */
        front() {
            return this.matrix_[0][0];
        }
        /**
         * @inheritdoc
         */
        back() {
            let lastArray = this.matrix_[this.matrix_.length - 1];
            return lastArray[lastArray.length - 1];
        }
        /**
         * @inheritdoc
         */
        next() {
            let index = this.index_++;
            if (index == this.size()) {
                this.index_ = 0;
                return { done: true, value: undefined };
            }
            else
                return { done: false, value: this.at(index) };
        }
        /**
        // Fetch row and column's index.
        /**
         * @hidden
         */
        fetch_index(index) {
            let row;
            for (row = 0; row < this.matrix_.length; row++) {
                let array = this.matrix_[row];
                if (index < array.length)
                    break;
                index -= array.length;
            }
            if (row == this.matrix_.length)
                row--;
            return std.make_pair(row, index);
        }
        /* =========================================================
            ELEMENTS I/O
                - PUSH & POP
                - INSERT
                - ERASE
                - PRE & POST-PROCESS
                - SWAP
        ============================================================
            PUSH & POP
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        push(...items) {
            // RE-SIZE
            if (this.size_ + items.length > this.capacity_)
                this.reserve(this.size_ + items.length);
            // INSERTS
            let array = this.matrix_[this.matrix_.length - 1];
            for (let i = 0; i < items.length; i++) {
                if (array.length >= this.get_col_size()) {
                    array = new Array();
                    this.matrix_.push(array);
                }
                array.push(items[i]);
            }
            // INDEXING
            this.size_ += items.length;
            return this.size_;
        }
        /**
         * @inheritdoc
         */
        push_front(val) {
            // INSERT TO THE FRONT
            this.matrix_[0].unshift(val);
            this.size_++;
            if (this.size_ > this.capacity_)
                this.reserve(this.size_ * 2);
        }
        /**
         * @inheritdoc
         */
        push_back(val) {
            let lastArray = this.matrix_[this.matrix_.length - 1];
            if (lastArray.length >= this.get_col_size() && this.matrix_.length < Deque.ROW) {
                lastArray = new Array();
                this.matrix_.push(lastArray);
            }
            lastArray.push(val);
            this.size_++;
            if (this.size_ > this.capacity_)
                this.reserve(this.size_ * 2);
        }
        /**
         * @inheritdoc
         */
        pop_front() {
            if (this.empty() == true)
                return; // SOMEWHERE PLACE TO THROW EXCEPTION
            // EREASE FIRST ELEMENT
            this.matrix_[0].shift();
            this.size_--;
            if (this.matrix_[0].length == 0 && this.matrix_.length > 1)
                this.matrix_.shift();
        }
        /**
         * @inheritdoc
         */
        pop_back() {
            if (this.empty() == true)
                return; // SOMEWHERE PLACE TO THROW EXCEPTION
            // ERASE LAST ELEMENT
            let lastArray = this.matrix_[this.matrix_.length - 1];
            lastArray.splice(lastArray.length - 1, 1);
            this.size_--;
            if (lastArray.length == 0 && this.matrix_.length > 1)
                this.matrix_.splice(this.matrix_.length - 1, 1);
        }
        insert(...args) {
            // REVERSE_ITERATOR TO ITERATOR
            let ret;
            let is_reverse_iterator = false;
            if (args[0] instanceof std.DequeReverseIterator) {
                is_reverse_iterator = true;
                args[0] = args[0].base().prev();
            }
            // BRANCHES
            if (args.length == 2)
                ret = this.insert_by_val(args[0], args[1]);
            else if (args.length == 3 && typeof args[1] == "number")
                ret = this._Insert_by_repeating_val(args[0], args[1], args[2]);
            else
                ret = this._Insert_by_range(args[0], args[1], args[2]);
            // RETURNS
            if (is_reverse_iterator == true)
                return new std.DequeReverseIterator(ret.next());
            else
                return ret;
        }
        /**
         * @hidden
         */
        insert_by_val(position, val) {
            return this._Insert_by_repeating_val(position, 1, val);
        }
        /**
         * @hidden
         */
        _Insert_by_repeating_val(position, n, val) {
            // CONSTRUCT ITEMS
            let items = [];
            items.length = n;
            for (let i = 0; i < n; i++)
                items[i] = val;
            // INSERT ELEMENTS
            if (position.equal_to(this.end())) {
                this.push(...items);
                return this.begin();
            }
            else
                return this.insert_by_items(position, items);
        }
        /**
         * @hidden
         */
        _Insert_by_range(position, begin, end) {
            // CONSTRUCT ITEMS
            let items = [];
            for (let it = begin; !it.equal_to(end); it = it.next())
                items.push(it.value);
            // INSERT ELEMENTS
            if (position.equal_to(this.end())) {
                this.push(...items);
                return this.begin();
            }
            else
                return this.insert_by_items(position, items);
        }
        /**
         * @hidden
         */
        insert_by_items(position, items) {
            let item_size = items.length;
            this.size_ += item_size;
            if (this.size_ <= this.capacity_) {
                // ------------------------------------------------------
                // WHEN FITTING INTO RESERVED CAPACITY IS POSSIBLE
                // ------------------------------------------------------
                // INSERTS CAREFULLY CONSIDERING THE COL_SIZE
                let index_pair = this.fetch_index(position.index);
                let index = index_pair.first;
                let spliced_values = this.matrix_[index].splice(index_pair.second);
                if (spliced_values.length != 0)
                    items = items.concat(...spliced_values);
                if (this.matrix_[index].length < Deque.ROW) {
                    this.matrix_[index] = this.matrix_[index].concat(...items.splice(0, Deque.ROW - this.matrix_[index].length));
                }
                let splicedArray = this.matrix_.splice(index + 1);
                // INSERTS
                while (items.length != 0)
                    this.matrix_.push(items.splice(0, Math.min(Deque.ROW, items.length)));
                // CONCAT WITH BACKS
                this.matrix_ = this.matrix_.concat(...splicedArray);
            }
            else {
                // -----------------------------------------------------
                // WHEN CANNOT BE FIT INTO THE RESERVED CAPACITY
                // -----------------------------------------------------
                // JUST INSERT CARELESSLY
                // AND KEEP BLANACE BY THE RESERVE() METHOD
                if (position.equal_to(this.end()) == true) {
                    this.matrix_.push(items); // ALL TO THE LAST
                }
                else {
                    let indexPair = this.fetch_index(position.index);
                    let index = indexPair.first;
                    let splicedValues = this.matrix_[index].splice(indexPair.second);
                    if (splicedValues.length != 0)
                        items = items.concat(...splicedValues);
                    // ALL TO THE MIDDLE
                    this.matrix_[index] = this.matrix_[index].concat(...items);
                }
                // AND KEEP BALANCE BY RESERVE()
                this.reserve(this.size_);
            }
            return position;
        }
        erase(first, last = first.next()) {
            let ret;
            let is_reverse_iterator = false;
            // REVERSE_ITERATOR TO ITERATOR
            if (first instanceof std.DequeReverseIterator) {
                is_reverse_iterator = true;
                let first_it = last.base();
                let last_it = first.base();
                first = first_it;
                last = last_it;
            }
            // ERASE ELEMENTS
            ret = this._Erase_by_range(first, last);
            // RETURN BRANCHES
            if (is_reverse_iterator == true)
                return new std.DequeReverseIterator(ret.next());
            else
                return ret;
        }
        /**
         * @hidden
         */
        _Erase_by_range(first, last) {
            if (first.index == -1)
                return first;
            // INDEXING
            let size;
            if (last.index == -1)
                size = this.size() - first.index;
            else
                size = last.index - first.index;
            this.size_ -= size;
            // ERASING
            while (size != 0) {
                let indexPair = this.fetch_index(first.index);
                let array = this.matrix_[indexPair.first];
                let myDeleteSize = Math.min(size, array.length - indexPair.second);
                array.splice(indexPair.second, myDeleteSize);
                if (array.length == 0 && this.matrix_.length > 1)
                    this.matrix_.splice(indexPair.first, 1);
                size -= myDeleteSize;
            }
            if (last.index == -1)
                return this.end();
            else
                return first;
        }
        swap(obj) {
            if (obj instanceof Deque) {
                [this.matrix_, obj.matrix_] = [obj.matrix_, this.matrix_];
                [this.size_, obj.size_] = [obj.size_, this.size_];
                [this.capacity_, obj.capacity_] = [obj.capacity_, this.capacity_];
            }
            else
                super.swap(obj);
        }
    }
    std.Deque = Deque;
})(std || (std = {}));
var std;
(function (std) {
    /**
     * <p> An iterator of {@link Deque}. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /> </a>
     * </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class DequeIterator extends std.Iterator {
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        /**
         * <p> Construct from the source {@link Deque container}. </p>
         *
         * <h4> Note </h4>
         * <p> Do not create the iterator directly, by yourself. </p>
         * <p> Use {@link Deque.begin begin()}, {@link Deque.end end()} in {@link Deque container} instead. </p>
         *
         * @param source The source {@link Deque container} to reference.
         * @param index Sequence number of the element in the source {@link Deque}.
         */
        constructor(source, index) {
            super(source);
            this.index_ = index;
        }
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * @hidden
         */
        get deque() {
            return this.source_;
        }
        /**
         * @inheritdoc
         */
        get value() {
            return this.deque.at(this.index_);
        }
        /**
         * Set value of the iterator is pointing to.
         *
         * @param val Value to set.
         */
        set value(val) {
            this.deque.set(this.index_, val);
        }
        /**
         * @inheritdoc
         */
        get index() {
            return this.index_;
        }
        /* ---------------------------------------------------------
            MOVERS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        prev() {
            if (this.index_ == -1)
                return new DequeIterator(this.deque, this.deque.size() - 1);
            else if (this.index_ - 1 < 0)
                return this.deque.end();
            else
                return new DequeIterator(this.deque, this.index_ - 1);
        }
        /**
         * @inheritdoc
         */
        next() {
            if (this.index_ >= this.source_.size() - 1)
                return this.deque.end();
            else
                return new DequeIterator(this.deque, this.index_ + 1);
        }
        /**
         * @inheritdoc
         */
        advance(n) {
            let new_index;
            if (n < 0 && this.index_ == -1)
                new_index = this.deque.size() + n;
            else
                new_index = this.index_ + n;
            if (new_index < 0 || new_index >= this.deque.size())
                return this.deque.end();
            else
                return new DequeIterator(this.deque, new_index);
        }
        /* ---------------------------------------------------------
            COMPARES
        --------------------------------------------------------- */
        /**
         * <p> Whether an iterator is equal with the iterator. </p>
         *
         * <p> Compare two iterators and returns whether they are equal or not. </p>
         *
         * <h4> Note </h4>
         * <p> Iterator's equal_to() only compare souce container and index number. </p>
         *
         * <p> Although elements in a pair, key and value are equal_to, if the source map or
         * index number is different, then the {@link equal_to equal_to()} will return false. If you want to
         * compare the elements of a pair, compare them directly by yourself. </p>
         *
         * @param obj An iterator to compare
         * @return Indicates whether equal or not.
         */
        equal_to(obj) {
            return super.equal_to(obj) && this.index_ == obj.index_;
        }
        /**
         * @inheritdoc
         */
        swap(obj) {
            [this.value, obj.value] = [obj.value, this.value];
        }
    }
    std.DequeIterator = DequeIterator;
})(std || (std = {}));
var std;
(function (std) {
    /**
     * <p> A reverse-iterator of Deque. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /> </a>
     * </p>
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class DequeReverseIterator extends std.ReverseIterator {
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        /**
         * Construct from base iterator.
         *
         * @param base A reference of the base iterator, which iterates in the opposite direction.
         */
        constructor(base) {
            super(base);
        }
        /**
         * @hidden
         */
        _Create_neighbor(base) {
            return new DequeReverseIterator(base);
        }
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        get value() {
            return this.base_.value;
        }
        /**
         * Set value of the iterator is pointing to.
         *
         * @param val Value to set.
         */
        set value(val) {
            this.base_.value = val;
        }
        /**
         * Get index.
         */
        get index() {
            return this.base_.index;
        }
    }
    std.DequeReverseIterator = DequeReverseIterator;
})(std || (std = {}));
/// <reference path="API.ts" />
/// <reference path="Iterator.ts" />
var std;
(function (std) {
    /**
     * <p> Vector, the dynamic array. </p>
     *
     * <p> {@link Vector}s are sequence containers representing arrays that can change in size. </p>
     *
     * <p> Just like arrays, {@link Vector}s use contiguous storage locations for their elements, which means that
     * their elements can also be accessed using offsets on regular pointers to its elements, and just as efficiently
     * as in arrays. But unlike arrays, their size can change dynamically, with their storage being handled
     * automatically by the container. </p>
     *
     * <p> Internally, {@link Vector}s use a dynamically allocated array to store their elements. This array may need
     * to be reallocated in order to grow in size when new elements are inserted, which implies allocating a new
     * array and moving all elements to it. This is a relatively expensive task in terms of processing time, and
     * thus, {@link Vector}s do not reallocate each time an element is added to the container. </p>
     *
     * <p> Instead, {@link Vector} containers may allocate some extra storage to accommodate for possible growth, and
     * thus the container may have an actual {@link capacity} greater than the storage strictly needed to contain its
     * elements (i.e., its {@link size}). Libraries can implement different strategies for growth to balance between
     * memory usage and reallocations, but in any case, reallocations should only happen at logarithmically growing
     * intervals of {@link size} so that the insertion of individual elements at the end of the {@link Vector} can be
     * provided with amortized constant time complexity (see {@link push_back push_back()}). </p>
     *
     * <p> Therefore, compared to arrays, {@link Vector}s consume more memory in exchange for the ability to manage
     * storage and grow dynamically in an efficient way. </p>
     *
     * <p> Compared to the other dynamic sequence containers ({@link Deque}s, {@link List}s), {@link Vector Vectors}
     * are very efficient accessing its elements (just like arrays) and relatively efficient adding or removing
     * elements from its end. For operations that involve inserting or removing elements at positions other than the
     * end, they perform worse than the others, and have less consistent iterators and references than {@link List}s.
     * </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" />
     * </a> </p>
     *
     * <h3> Container properties </h3>
     * <dl>
     *	<dt> Sequence </dt>
     *	<dd>
     *		Elements in sequence containers are ordered in a strict linear sequence. Individual elements are
     *		accessed by their position in this sequence.
     *	</dd>
     *
     *	<dt> Dynamic array </dt>
     *	<dd>
     *		Allows direct access to any element in the sequence, even through pointer arithmetics, and provides
     *		relatively fast addition/removal of elements at the end of the sequence.
     *	</dd>
     * </dl>
     *
     * @param <T> Type of the elements.
     *
     * @reference http://www.cplusplus.com/reference/vector/vector
     * @author Jeongho Nam <http://samchon.org>
     */
    class Vector extends Array {
        constructor(...args) {
            super();
            if (args.length == 0) {
            }
            else if (args.length == 1 && args[0] instanceof Array) {
                // CONSTRUCT FROM AN ARRAY OF ITEMS
                let array = args[0];
                super.push(...array);
            }
            else if (args.length == 1 && typeof args[0] == "number") {
                // CONSTRUCT FROM SIZE
                let size = args[0];
                this.length = size;
            }
            else if (args.length == 2 && typeof args[0] == "number") {
                // CONSTRUCT FROM SIZE AND REPEATING VALUE
                let size = args[0];
                let val = args[1];
                this.assign(size, val);
            }
            else if (args.length == 2 && args[0] instanceof std.Iterator && args[1] instanceof std.Iterator) {
                // CONSTRUCT FROM INPUT ITERATORS
                let begin = args[0];
                let end = args[1];
                this.assign(begin, end);
            }
        }
        assign(first, second) {
            this.clear();
            this.insert(this.end(), first, second);
        }
        /**
         * @inheritdoc
         */
        reserve(size) {
            // NOTHING TO DO ESPECIALLY
        }
        /**
         * @inheritdoc
         */
        clear() {
            this.erase(this.begin(), this.end());
        }
        /* =========================================================
            ACCESSORS
        ========================================================= */
        /**
         * @inheritdoc
         */
        begin() {
            if (this.empty() == true)
                return this.end();
            else
                return new std.VectorIterator(this, 0);
        }
        /**
         * @inheritdoc
         */
        end() {
            return new std.VectorIterator(this, -1);
        }
        /**
         * @inheritdoc
         */
        rbegin() {
            return new std.VectorReverseIterator(this.end());
        }
        /**
         * @inheritdoc
         */
        rend() {
            return new std.VectorReverseIterator(this.begin());
        }
        /**
         * @inheritdoc
         */
        size() {
            return this.length;
        }
        /**
         * @inheritdoc
         */
        capacity() {
            return this.length;
        }
        /**
         * @inheritdoc
         */
        empty() {
            return this.length == 0;
        }
        /**
         * @inheritdoc
         */
        at(index) {
            if (index < this.size())
                return this[index];
            else
                throw new std.OutOfRange("Target index is greater than Vector's size.");
        }
        /**
         * @inheritdoc
         */
        set(index, val) {
            if (index > this.length)
                throw new std.OutOfRange("Target index is greater than Vector's size.");
            let prev = this[index];
            this[index] = val;
            return prev;
        }
        /**
         * @inheritdoc
         */
        front() {
            return this.at(0);
        }
        /**
         * @inheritdoc
         */
        back() {
            return this.at(this.length - 1);
        }
        /* =========================================================
            ELEMENTS I/O
                - INSERT
                - ERASE
                - SWAP
        ============================================================
            INSERT
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        push_back(val) {
            super.push(val);
        }
        insert(...args) {
            // REVERSE_ITERATOR TO ITERATOR
            let ret;
            let is_reverse_iterator = false;
            if (args[0] instanceof std.VectorReverseIterator) {
                is_reverse_iterator = true;
                args[0] = args[0].base().prev();
            }
            // BRANCHES
            if (args.length == 2)
                ret = this.insert_by_val(args[0], args[1]);
            else if (args.length == 3 && typeof args[1] == "number")
                ret = this._Insert_by_repeating_val(args[0], args[1], args[2]);
            else
                ret = this._Insert_by_range(args[0], args[1], args[2]);
            // RETURNS
            if (is_reverse_iterator == true)
                return new std.VectorReverseIterator(ret.next());
            else
                return ret;
        }
        /**
         * @hidden
         */
        insert_by_val(position, val) {
            return this._Insert_by_repeating_val(position, 1, val);
        }
        /**
         * @hidden
         */
        _Insert_by_repeating_val(position, n, val) {
            if (position.index == -1) {
                // WHEN INSERT TO THE LAST
                for (let i = 0; i < n; i++)
                    super.push(val);
                return this.begin();
            }
            else {
                ///////
                // INSERT TO THE MIDDLE POSITION
                ///////
                // CUT RIGHT SIDE
                let spliced_array = super.splice(position.index);
                let insert_size = 0;
                // INSERT ELEMENTS
                for (let i = 0; i < n; i++) {
                    super.push(val);
                    insert_size++;
                }
                super.push(...spliced_array); // CONCAT THE SPLICEDS
                return position;
            }
        }
        /**
         * @hidden
         */
        _Insert_by_range(position, first, last) {
            if (position.index == -1) {
                // WHEN INSERT TO THE LAST
                for (; !first.equal_to(last); first = first.next())
                    super.push(first.value);
                return this.begin();
            }
            else {
                ///////
                // INSERT TO THE MIDDLE POSITION
                ///////
                // CUT RIGHT SIDE
                let spliced_array = super.splice(position.index);
                let insert_size = 0;
                // INSERT ELEMENTS
                for (; !first.equal_to(last); first = first.next()) {
                    super.push(first.value);
                    insert_size++;
                }
                super.push(...spliced_array); // CONCAT THE SPLICEDS
                return position;
            }
        }
        /* ---------------------------------------------------------
            ERASE
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        pop_back() {
            this.erase(this.end().prev());
        }
        erase(first, last = first.next()) {
            let ret;
            let is_reverse_iterator = false;
            // REVERSE_ITERATOR TO ITERATOR
            if (first instanceof std.VectorReverseIterator) {
                is_reverse_iterator = true;
                let first_it = last.base();
                let last_it = first.base();
                first = first_it;
                last = last_it;
            }
            // ERASE ELEMENTS
            ret = this._Erase_by_range(first, last);
            // RETURN BRANCHES
            if (is_reverse_iterator == true)
                return new std.VectorReverseIterator(ret.next());
            else
                return ret;
        }
        /**
         * @hidden
         */
        _Erase_by_range(first, last) {
            if (first.index == -1)
                return first;
            // ERASE ELEMENTS
            if (last.index == -1) {
                super.splice(first.index);
                return this.end();
            }
            else
                super.splice(first.index, last.index - first.index);
            return first;
        }
        swap(obj) {
            let supplement = new Vector(this.begin(), this.end());
            this.assign(obj.begin(), obj.end());
            obj.assign(supplement.begin(), supplement.end());
        }
    }
    std.Vector = Vector;
})(std || (std = {}));
var std;
(function (std) {
    /**
     * <p> An iterator of Vector. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" />
     * </p>
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class VectorIterator extends std.Iterator {
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        /**
         * <p> Construct from the source {@link Vector container}. </p>
         *
         * <h4> Note </h4>
         * <p> Do not create the iterator directly, by yourself. </p>
         * <p> Use {@link Vector.begin begin()}, {@link Vector.end end()} in {@link Vector container} instead. </p>
         *
         * @param source The source {@link Vector container} to reference.
         * @param index Sequence number of the element in the source {@link Vector}.
         */
        constructor(source, index) {
            super(source);
            this.index_ = index;
        }
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * @hidden
         */
        get vector() {
            return this.source_;
        }
        /**
         * @inheritdoc
         */
        get value() {
            return this.vector.at(this.index_);
        }
        /**
         * Set value of the iterator is pointing to.
         *
         * @param val Value to set.
         */
        set value(val) {
            this.vector.set(this.index_, val);
        }
        /**
         * Get index.
         */
        get index() {
            return this.index_;
        }
        /* ---------------------------------------------------------
            MOVERS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        prev() {
            if (this.index_ == -1)
                return new VectorIterator(this.vector, this.vector.size() - 1);
            else if (this.index_ - 1 < 0)
                return this.vector.end();
            else
                return new VectorIterator(this.vector, this.index_ - 1);
        }
        /**
         * @inheritdoc
         */
        next() {
            if (this.index_ >= this.source_.size() - 1)
                return this.vector.end();
            else
                return new VectorIterator(this.vector, this.index_ + 1);
        }
        /**
         * @inheritdoc
         */
        advance(n) {
            let new_index;
            if (n < 0 && this.index_ == -1)
                new_index = this.vector.size() + n;
            else
                new_index = this.index_ + n;
            if (new_index < 0 || new_index >= this.vector.size())
                return this.vector.end();
            else
                return new VectorIterator(this.vector, new_index);
        }
        /* ---------------------------------------------------------
            COMPARES
        --------------------------------------------------------- */
        /**
         * <p> Whether an iterator is equal with the iterator. </p>
         *
         * <p> Compare two iterators and returns whether they are equal or not. </p>
         *
         * <h4> Note </h4>
         * <p> Iterator's equal_to() only compare souce container and index number. </p>
         *
         * <p> Although elements in a pair, key and value are equal_to, if the source map or
         * index number is different, then the {@link equal_to equal_to()} will return false. If you want to
         * compare the elements of a pair, compare them directly by yourself. </p>
         *
         * @param obj An iterator to compare
         * @return Indicates whether equal or not.
         */
        equal_to(obj) {
            return super.equal_to(obj) && this.index_ == obj.index_;
        }
        /**
         * @inheritdoc
         */
        swap(obj) {
            [this.value, obj.value] = [obj.value, this.value];
        }
        toString() {
            return this.index_;
        }
    }
    std.VectorIterator = VectorIterator;
})(std || (std = {}));
var std;
(function (std) {
    /**
     * <p> A reverse-iterator of Vector. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" />
     * </p>
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class VectorReverseIterator extends std.ReverseIterator {
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        /**
         * Construct from base iterator.
         *
         * @param base A reference of the base iterator, which iterates in the opposite direction.
         */
        constructor(base) {
            super(base);
        }
        /**
         * @hidden
         */
        _Create_neighbor(base) {
            return new VectorReverseIterator(base);
        }
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        get value() {
            return this.base_.value;
        }
        /**
         * Set value of the iterator is pointing to.
         *
         * @param val Value to set.
         */
        set value(val) {
            this.base_.value = val;
        }
        /**
         * Get index.
         */
        get index() {
            return this.base_.index;
        }
    }
    std.VectorReverseIterator = VectorReverseIterator;
})(std || (std = {}));
/// <reference path="../API.ts" />
/// <reference path="../Vector.ts" />
std.VectorIterator.prototype.valueOf = function () {
    return this.index;
};
var std;
(function (std) {
    var example;
    (function (example) {
        function test_all() {
            example.test_for_of();
            //for (let key in std.example)
            //	if (key != "test_all" && (std.example as any)[key] instanceof Function)
            //	{
            //		console.log("===================================================");
            //		console.log("	" + key);
            //		console.log("===================================================");
            //		(std.example as any)[key]();
            //	}
        }
        example.test_all = test_all;
    })(example = std.example || (std.example = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
var std;
(function (std) {
    var example;
    (function (example) {
        function test_bind() {
            let list = new std.List();
            // <List>???.insert(...)
            // list.insert(list.end(), 5, 1)
            let fn = std.bind(std.List.prototype.insert);
            fn(list, list.end(), 5, 1);
            debug_list();
            let fn2 = std.bind(std.List.prototype.clear);
            fn2(list);
            debug_list();
            // <List>???.insert(_1, _2, 5, _3)
            // list.insert(list.end(), 5, 2)
            let fn3 = std.bind(list.insert, std.placeholders._1, std.placeholders._2, 5, std.placeholders._3);
            fn3(list, list.end(), 2);
            debug_list();
            function debug_list() {
                console.log("#" + list.size());
                for (let it = list.begin(); !it.equal_to(list.end()); it = it.next())
                    console.log(it.value);
                console.log("----------------------------------------------------------");
            }
        }
        example.test_bind = test_bind;
    })(example = std.example || (std.example = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
var std;
(function (std) {
    var example;
    (function (example) {
        function test_deque() {
            let deque = new std.Deque();
            for (let i = 0; i < 10; i++)
                deque.push_back(i);
            let it = deque.begin().advance(3);
            it = deque.erase(it); // erase 3
            console.log(it.value); // print 4
            it = deque.begin().advance(2);
            it = deque.insert(it, -1); // insert -1
            console.log(it.next().value); // print 2
            it = deque.begin().advance(6);
            it = deque.erase(it, it.advance(3)); // erase from 6 to 9
            //console.log(it.value); // print 9
            console.log(it.equal_to(deque.end()));
            console.log("-------------------------------------");
            for (let it = deque.begin(); !it.equal_to(deque.end()); it = it.next())
                console.log(it.value);
        }
        example.test_deque = test_deque;
    })(example = std.example || (std.example = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
var std;
(function (std) {
    var example;
    (function (example) {
        function test_for_each() {
            let array = new std.Vector();
            for (let i = 0; i < 20; i++)
                array.push_back(i);
            let fn = std.for_each(array.begin(), array.end(), function (val) { console.log(val); });
        }
        example.test_for_each = test_for_each;
    })(example = std.example || (std.example = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
var std;
(function (std) {
    var example;
    (function (example) {
        function test_for_of() {
            let container = new std.TreeSet();
            container.push(0, 1, 2, 3, 4, 5);
            for (let val of container)
                console.log(val);
            for (let val of container)
                console.log(val);
        }
        example.test_for_of = test_for_of;
    })(example = std.example || (std.example = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
var std;
(function (std) {
    var example;
    (function (example) {
        function test_hash_map() {
            let map = new std.TreeMap();
            map.insert(["first", 1]);
            map.insert(["second", 2]);
            for (let it = map.begin(); !it.equal_to(map.end()); it = it.next())
                console.log(it.first, it.second);
        }
        example.test_hash_map = test_hash_map;
    })(example = std.example || (std.example = {}));
})(std || (std = {}));
/// <reference path="API.ts" />
/// <reference path="base/ListContainer.ts" />
var std;
(function (std) {
    /**
     * <p> Doubly linked list. </p>
     *
     * <p> {@link List}s are sequence containers that allow constant time insert and erase operations anywhere within the
     * sequence, and iteration in both directions. </p>
     *
     * <p> List containers are implemented as doubly-linked lists; Doubly linked lists can store each of the elements they
     * contain in different and unrelated storage locations. The ordering is kept internally by the association to each
     * element of a link to the element preceding it and a link to the element following it. </p>
     *
     * <p> Compared to other base standard sequence containers (array, vector and deque), lists perform generally better
     * in inserting, extracting and moving elements in any position within the container for which an iterator has already
     * been obtained, and therefore also in algorithms that make intensive use of these, like sorting algorithms. </p>
     *
     * <p> The main drawback of lists and forward_lists compared to these other sequence containers is that they lack
     * direct access to the elements by their position; For example, to access the sixth element in a list, one has to
     * iterate from a known position (like the beginning or the end) to that position, which takes linear time in the
     * distance between these. They also consume some extra memory to keep the linking information associated to each
     * element (which may be an important factor for large lists of small-sized elements). </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
     * </p>
     *
     * <h3> Container properties </h3>
     * <dl>
     * 	<dt> Sequence </dt>
     * 	<dd> Elements in sequence containers are ordered in a strict linear sequence. Individual elements are accessed by
     *		 their position in this sequence. </dd>
     *
     * 	<dt> Doubly-linked list </dt>
     *	<dd> Each element keeps information on how to locate the next and the previous elements, allowing constant time
     *		 insert and erase operations before or after a specific element (even of entire ranges), but no direct random
     *		 access. </dd>
     * </dl>
     *
     * @param <T> Type of the elements.
     *
     * @reference http://www.cplusplus.com/reference/list/list/
     * @author Jeongho Nam <http://samchon.org>
     */
    class List extends std.base.ListContainer {
        constructor(...args) {
            super();
            // BRANCHES
            if (args.length == 0) {
            }
            else if (args.length == 1 && args[0] instanceof Array) {
                let array = args[0];
                this.push(...array);
            }
            else if (args.length == 1 && (args[0] instanceof List)) {
                let container = args[0];
                this.assign(container.begin(), container.end());
            }
            else if (args.length == 2 && args[0] instanceof std.Iterator && args[1] instanceof std.Iterator) {
                let begin = args[0];
                let end = args[1];
                this.assign(begin, end);
            }
            else if (args.length == 2 && typeof args[0] == "number") {
                let size = args[0];
                let val = args[1];
                this.assign(size, val);
            }
        }
        _Create_iterator(prev, next, val) {
            return new std.ListIterator(this, prev, next, val);
        }
        assign(par1, par2) {
            this.clear();
            this.insert(this.end(), par1, par2);
        }
        /* =========================================================
            ACCESSORS
        ========================================================= */
        /**
         * @inheritdoc
         */
        rbegin() {
            return new std.ListReverseIterator(this.end());
        }
        /**
         * @inheritdoc
         */
        rend() {
            return new std.ListReverseIterator(this.begin());
        }
        /**
         * @inheritdoc
         */
        front() {
            return this.begin().value;
        }
        /**
         * @inheritdoc
         */
        back() {
            return this.end().prev().value;
        }
        insert(...args) {
            // REVERSE_ITERATOR TO ITERATOR
            let ret;
            let is_reverse_iterator = false;
            if (args[0] instanceof std.ListReverseIterator) {
                is_reverse_iterator = true;
                args[0] = args[0].base().prev();
            }
            // BRANCHES
            if (args.length == 2)
                ret = this._Insert_by_repeating_val(args[0], 1, args[1]);
            else if (args.length == 3 && typeof args[1] == "number")
                ret = this._Insert_by_repeating_val(args[0], args[1], args[2]);
            else
                ret = this._Insert_by_range(args[0], args[1], args[2]);
            // RETURNS
            if (is_reverse_iterator == true)
                return new std.ListReverseIterator(ret.next());
            else
                return ret;
        }
        erase(first, last = first.next()) {
            let ret;
            let is_reverse_iterator = false;
            // REVERSE ITERATOR TO ITERATOR
            if (first instanceof std.ListReverseIterator) {
                is_reverse_iterator = true;
                let first_it = last.base();
                let last_it = first.base();
                first = first_it;
                last = last_it;
            }
            // ERASE ELEMENTS
            ret = this._Erase_by_range(first, last);
            // RETURN BRANCHES
            if (is_reverse_iterator == true)
                return new std.ListReverseIterator(ret.next());
            else
                return ret;
        }
        unique(binary_pred = std.equal_to) {
            let it = this.begin().next();
            while (!it.equal_to(this.end())) {
                if (std.equal_to(it.value, it.prev().value) == true)
                    it = this.erase(it);
                else
                    it = it.next();
            }
        }
        /**
         * <p> Remove elements with specific value. </p>
         *
         * <p> Removes from the container all the elements that compare equal to <i>val</i>. This calls the
         * destructor of these objects and reduces the container {@link size} by the number of elements removed. </p>
         *
         * <p> Unlike member function {@link List.erase}, which erases elements by their position (using an
         * iterator), this function ({@link List.remove}) removes elements by their value. </p>
         *
         * <p> A similar function, {@link List.remove_if}, exists, which allows for a condition other than an
         * equality comparison to determine whether an element is removed. </p>
         *
         * @param val Value of the elements to be removed.
         */
        remove(val) {
            let it = this.begin();
            while (!it.equal_to(this.end())) {
                if (std.equal_to(it.value, val) == true)
                    it = this.erase(it);
                else
                    it = it.next();
            }
        }
        /**
         * <p> Remove elements fulfilling condition. </p>
         *
         * <p> Removes from the container all the elements for which <i>pred</i> returns <code>true</code>. This
         * calls the destructor of these objects and reduces the container {@link size} by the number of elements
         * removed. </p>
         *
         * <p> The function calls <code>pred(it.value)</code> for each element (where <code>it</code> is an iterator
         * to that element). Any of the elements in the list for which this returns <code>true</code>, are removed
         * from the  </p>
         *
         * @param pred Unary predicate that, taking a value of the same type as those contained in the forward_list
         *			   object, returns <code>true</code> for those values to be removed from the container, and
         *			   <code>false</code> for those remaining. This can either be a function pointer or a function
         *			   object.
         */
        remove_if(pred) {
            let it = this.begin();
            while (!it.equal_to(this.end())) {
                if (pred(it.value) == true)
                    it = this.erase(it);
                else
                    it = it.next();
            }
        }
        merge(obj, compare = std.less) {
            if (this == obj)
                return;
            let it = this.begin();
            while (obj.empty() == false) {
                let begin = obj.begin();
                while (!it.equal_to(this.end()) && compare(it.value, begin.value) == true)
                    it = it.next();
                this.splice(it, obj, begin);
            }
        }
        splice(position, obj, begin = null, end = null) {
            if (begin == null) {
                begin = obj.begin();
                end = obj.end();
            }
            else if (end == null) {
                end = begin.next();
            }
            this.insert(position, begin, end);
            obj.erase(begin, end);
        }
        sort(compare = std.less) {
            this.qsort(this.begin(), this.end().prev(), compare);
        }
        /**
         * @hidden
         */
        qsort(first, last, compare) {
            if (first != last && last != this.end() && first != last.next()) {
                let temp = this.partition(first, last, compare);
                this.qsort(first, temp.prev(), compare);
                this.qsort(temp.next(), last, compare);
            }
        }
        /**
         * @hidden
         */
        partition(first, last, compare) {
            let standard = last.value; // TO BE COMPARED
            let prev = first.prev(); // TO BE SMALLEST
            let it = first;
            for (; it != last; it = it.next())
                if (compare(it.value, standard)) {
                    prev = (prev == this.end()) ? first : prev.next();
                    [prev.value, it.value] = [it.value, prev.value];
                }
            prev = (prev == this.end()) ? first : prev.next();
            [prev.value, it.value] = [it.value, prev.value];
            return prev;
        }
        swap(obj) {
            super.swap(obj);
        }
    }
    std.List = List;
})(std || (std = {}));
var std;
(function (std) {
    /**
     * <p> An iterator, node of a List. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
     * </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class ListIterator extends std.base.ListIteratorBase {
        /* ---------------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------------- */
        /**
         * Initializer Constructor.
         *
         * #### Note
         * Do not create the iterator directly, by yourself.
         *
         * Use {@link List.begin begin()}, {@link List.end end()} in {@link List container} instead.
         *
         * @param source The source {@link List container} to reference.
         * @param prev A refenrece of previous node ({@link ListIterator iterator}).
         * @param next A refenrece of next node ({@link ListIterator iterator}).
         * @param value Value to be stored in the node (iterator).
         */
        constructor(source, prev, next, value) {
            super(source, prev, next, value);
        }
        /* ---------------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        prev() {
            return this["prev_"];
        }
        /**
         * @inheritdoc
         */
        next() {
            return this["next_"];
        }
        /**
         * @inheritdoc
         */
        advance(step) {
            return super.advance(step);
        }
        /**
         * @inheritdoc
         */
        get value() {
            return this.value_;
        }
        /**
         * Set value of the iterator is pointing to.
         *
         * @param val Value to set.
         */
        set value(val) {
            this.value_ = val;
        }
        /* ---------------------------------------------------------------
            COMPARISON
        --------------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        equal_to(obj) {
            return this == obj;
        }
        /**
         * @inheritdoc
         */
        swap(obj) {
            super.swap(obj);
        }
    }
    std.ListIterator = ListIterator;
})(std || (std = {}));
var std;
(function (std) {
    /**
     * <p> A reverse-iterator of List. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
     * </p>
     *
     * @param <T> Type of the elements.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class ListReverseIterator extends std.ReverseIterator {
        /* ---------------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------------- */
        /**
         * Construct from base iterator.
         *
         * @param base A reference of the base iterator, which iterates in the opposite direction.
         */
        constructor(base) {
            super(base);
        }
        /**
         * @hidden
         */
        _Create_neighbor(base) {
            return new ListReverseIterator(base);
        }
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        get value() {
            return this.base_.value;
        }
        /**
         * Set value of the iterator is pointing to.
         *
         * @param val Value to set.
         */
        set value(val) {
            this.base_.value = val;
        }
    }
    std.ListReverseIterator = ListReverseIterator;
})(std || (std = {}));
/// <reference path="../API.ts" />
/// <reference path="../List.ts" />
var std;
(function (std) {
    var example;
    (function (example) {
        function test_list() {
            let list = new std.List();
            for (let i = 0; i < 10; i++)
                list.push_back(i);
            let it = list.begin().advance(3);
            it = list.erase(it); // erase 3
            console.log(it.value); // print 4
            it = list.begin().advance(2);
            it = list.insert(it, -1); // insert -1
            console.log(it.next().value); // print 2
            it = list.begin().advance(6);
            it = list.erase(it, it.advance(3)); // erase from 6 to 9
            //console.log(it.value); // print 9
            console.log(it.equal_to(list.end()));
            console.log("-------------------------------------");
            for (let it = list.begin(); !it.equal_to(list.end()); it = it.next())
                console.log(it.value);
        }
        example.test_list = test_list;
    })(example = std.example || (std.example = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
var std;
(function (std) {
    var example;
    (function (example) {
        function test_reverse_iterator() {
            console.log("Test Reverse Iterator");
            let vec = new std.Vector([0, 1, 2, 3, 4]);
            let list = new std.List(vec.begin(), vec.end());
            let deque = new std.Deque(vec.begin(), vec.end());
            let set = new std.HashSet(vec.begin(), vec.end());
            let map = new std.HashMap([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]);
            console.log(vec.rbegin().advance(2).value, vec.end().advance(-3).value);
            console.log("Vector's Reverse Iterator");
            reverse_iterate(vec);
            console.log("List's Reverse Iterator");
            reverse_iterate(list);
            console.log("Deque's Reverse Iterator");
            reverse_iterate(deque);
            console.log("HashSet's Reverse Iterator");
            reverse_iterate(set);
            console.log("HashMap's Reverse Iterator");
            reverse_iterate(map);
        }
        example.test_reverse_iterator = test_reverse_iterator;
        function reverse_iterate(container) {
            for (let it = container.rbegin(); !it.equal_to(container.rend()); it = it.next())
                console.log(it.value);
        }
    })(example = std.example || (std.example = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
var std;
(function (std) {
    var example;
    (function (example) {
        function sorting() {
            let cubes = new std.Deque();
            for (let i = 0; i < 20; i++)
                cubes.push_back(new Cube());
            ///////////////////////////////
            // SORT BY Cube.less()
            ///////////////////////////////
            std.sort(cubes.begin(), cubes.end());
            for (let it = cubes.begin(); !it.equal_to(cubes.end()); it = it.next())
                it.value.debug_size();
            console.log("------------------------------");
            ///////////////////////////////
            // SORT BY inline function
            ///////////////////////////////
            std.sort(cubes.begin(), cubes.end(), function (left, right) {
                if (left.x != right.x)
                    return left.x < right.x;
                else if (left.y != right.y)
                    return left.y < right.y;
                else
                    return left.z < right.z;
            });
            for (let it = cubes.begin(); !it.equal_to(cubes.end()); it = it.next())
                it.value.debug_position();
        }
        example.sorting = sorting;
        class Cube {
            constructor() {
                this.width = Math.random() * 10;
                this.height = Math.random() * 10;
                this.length = Math.random() * 10;
                this.x = Math.random() * 100 - 50;
                this.y = Math.random() * 100 - 50;
                this.z = Math.random() * 100 - 50;
            }
            get volume() {
                return this.width * this.height * this.length;
            }
            less(obj) {
                return this.volume < obj.volume;
            }
            debug_size() {
                console.log(this.width, this.height, this.length + " => " + this.volume);
            }
            debug_position() {
                console.log(this.x, this.y, this.z);
            }
        }
    })(example = std.example || (std.example = {}));
})(std || (std = {}));
/// <reference path="../API.ts" />
var std;
(function (std) {
    var example;
    (function (example) {
        function tree_set() {
            let set = new std.TreeMultiSet();
            // INSERTS EVEN NUMBERS
            for (let i = 0; i <= 10; i += 2)
                for (let j = 0; j < 3; j++)
                    set.insert(i);
            // FIND 4 -> HAS
            console.log("Matched node: 4");
            console.log("	lower bound: " + set.lower_bound(4).value);
            console.log("	upper bound: " + set.upper_bound(4).value);
            console.log(" ");
            // FIND ODD NUMBERS -> NOT EXIST
            for (let i = 1; i <= 10; i += 2) {
                console.log("Mis-matched node: " + i);
                console.log("	lower bound: " + set.lower_bound(i).value);
                console.log("	upper bound: " + set.upper_bound(i).value);
                console.log(" ");
            }
        }
        example.tree_set = tree_set;
    })(example = std.example || (std.example = {}));
})(std || (std = {}));
/// <reference path="API.ts" />
// Standard exceptions
//
// This header defines the base class for all exceptions thrown by the elements of the standard library: 
// {@link Exception}, along with several types and utilities to assist handling exceptions:
//
// @reference http://www.cplusplus.com/reference/exception/
// @author Jeongho Nam <http://samchon.org>
var std;
(function (std) {
    /**
     * <p> Function handling termination on exception </p>
     *
     * <p> Calls the current terminate handler. </p>
     *
     * <p> By default, the terminate handler calls abort. But this behavior can be redefined by calling
     * {@link set_terminate}. </p>
     *
     * <p> This function is automatically called when no <code>catch</code> handler can be found for a thrown exception,
     * or for some other exceptional circumstance that makes impossible to continue the exception handling process. </p>
     *
     * <p> This function is provided so that the terminate handler can be explicitly called by a program that needs to
     * abnormally terminate, and works even if {@link set_terminate} has not been used to set a custom terminate handler
     * (calling abort in this case). </p>
     */
    function terminate() {
        if (terminate_handler != null)
            terminate_handler();
        if (std.is_node() == true)
            process.exit();
        else {
            window.open("", "_self", "");
            window.close();
        }
    }
    std.terminate = terminate;
    /**
     * <p> Set <i>terminate handler</i> function. </p>
     *
     * <p> A <i>terminate handler</i> function is a function automatically called when the exception handling process has
     * to be abandoned for some reason. This happens when no catch handler can be found for a thrown exception, or for
     * some other exceptional circumstance that makes impossible to continue the exception handling process. </p>
     *
     * <p> Before this function is called by the program for the first time, the default behavior is to call abort. </p>
     *
     * <p> A program may explicitly call the current terminate handler function by calling {@link terminate}. </p>
     *
     * @param f Function that takes no parameters and returns no value (<i>void</i>).
     */
    function set_terminate(f) {
        terminate_handler = f;
        if (std.is_node() == true)
            process.on("uncaughtException", function (error) {
                terminate_handler();
            });
        else
            window.onerror =
                function (message, filename, lineno, colno, error) {
                    terminate_handler();
                };
    }
    std.set_terminate = set_terminate;
    /**
     * <p> Get <i>terminate handler</i> function. </p>
     *
     * <p> The <i>terminate handler</i> function is automatically called when no <code>catch</code> handler can be found
     * for a thrown exception, or for some other exceptional circumstance that makes impossible to continue the exception
     * handling process. </p>
     *
     * <p> If no such function has been set by a previous call to {@link set_terminate}, the function returns a
     * <i>null-pointer</i>. </p>
     *
     * @return If {@link set_terminate} has previously been called by the program, the function returns the current
     *		   <i>terminate handler</i> function. Otherwise, it returns a <i>null-pointer</i>.
     */
    function get_terminate() {
        return terminate_handler;
    }
    std.get_terminate = get_terminate;
    /* =========================================================
        + EXCEPTION
            + LOGIC_ERROR
                - DOMAIN_ERROR
                - INVALID_ARGUMENT
                - LENGTH_ERROR
                - OUT_OF_RANGE
            + RUNTIME_ERROR
                - OVERFLOW_ERROR
                - RANGE_ERROR
                - SYSTEM_ERROR
                - UNDERFLOW_ERROR
    ========================================================= */
    /**
     * <p> Standard exception class. </p>
     *
     * <p> Base class for standard exceptions. </p>
     *
     * <p> All objects thrown by components of the standard library are derived from this class.
     * Therefore, all standard exceptions can be caught by catching this type by reference. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
     *
     * @reference http://www.cplusplus.com/reference/exception/exception
     * @author Jeongho Nam <http://samchon.org>
     */
    class Exception extends Error {
        constructor(message = "") {
            super();
            this.description = message;
        }
        /**
         * <p> Get string identifying exception. </p>
         * <p> Returns a string that may be used to identify the exception. </p>
         *
         * <p> The particular representation pointed by the returned value is implementation-defined.
         * As a virtual function, derived classes may redefine this function so that specify value are
         * returned. </p>
         */
        what() {
            return this.description;
        }
        /**
         * @inheritdoc
         */
        get message() {
            return this.description;
        }
        /**
         * @inheritdoc
         */
        get name() {
            return this.constructor["name"];
        }
    }
    std.Exception = Exception;
    /* =========================================================
        + LOGIC_ERROR
            - DOMAIN_ERROR
            - INVALID_ARGUMENT
            - LENGTH_ERROR
            - OUT_OF_RANGE
    ========================================================= */
    /**
     * <p> Logic error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report errors in the internal
     * logical of the program, such as violation of logical preconditions or class invariants. </p>
     *
     * <p> These errors are presumably detectable before the program executes. </p>
     *
     * <p> It is used as a base class for several logical error exceptions. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/logic_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class LogicError extends Exception {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message) {
            super(message);
        }
    }
    std.LogicError = LogicError;
    /**
     * <p> Domain error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report domain errors. </p>
     *
     * <p> Generally, the domain of a mathematical function is the subset of values that it is defined for.
     * For example, the square root function is only defined for non-negative numbers. Thus, a negative number
     * for such a function would qualify as a domain error. </p>
     *
     * <p> No component of the standard library throws exceptions of this type. It is designed as a standard
     * exception to be thrown by programs. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a></p>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/domain_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class DomainError extends LogicError {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message) {
            super(message);
        }
    }
    std.DomainError = DomainError;
    /**
     * <p> Invalid argument exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report an invalid argument. </p>
     *
     * <p> It is a standard exception that can be thrown by programs. Some components of the standard library
     * also throw exceptions of this type to signal invalid arguments. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/invalid_argument
     * @author Jeongho Nam <http://samchon.org>
     */
    class InvalidArgument extends LogicError {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message) {
            super(message);
        }
    }
    std.InvalidArgument = InvalidArgument;
    /**
     * <p> Length error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report a length error. </p>
     *
     * <p> It is a standard exception that can be thrown by programs. Some components of the standard library,
     * such as vector and string also throw exceptions of this type to signal errors resizing. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/length_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class LengthError extends LogicError {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message) {
            super(message);
        }
    }
    std.LengthError = LengthError;
    /**
     * <p> Out-of-range exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report an out-of-range error. </p>
     *
     * <p> It is a standard exception that can be thrown by programs. Some components of the standard library,
     * such as vector, deque, string and bitset also throw exceptions of this type to signal arguments
     * out of range. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/out_of_range
     * @author Jeongho Nam <http://samchon.org>
     */
    class OutOfRange extends LogicError {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message) {
            super(message);
        }
    }
    std.OutOfRange = OutOfRange;
    /* =========================================================
        + RUNTIME_ERROR
            - OVERFLOW_ERROR
            - RANGE_ERROR
            - SYSTEM_ERROR
            - UNDERFLOW_ERROR
    ========================================================= */
    /**
     * <p> Runtime error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report errors that can only be
     * detected during runtime. </p>
     *
     * <p> It is used as a base class for several runtime error exceptions. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/runtime_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class RuntimeError extends Exception {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message) {
            super(message);
        }
    }
    std.RuntimeError = RuntimeError;
    /**
     * <p> Overflow error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to arithmetic overflow errors. </p>
     *
     * <p> It is a standard exception that can be thrown by programs. Some components of the standard library
     * also throw exceptions of this type to signal range errors. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/overflow_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class OverflowError extends RuntimeError {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message) {
            super(message);
        }
    }
    std.OverflowError = OverflowError;
    /**
     * <p> Underflow error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to arithmetic underflow errors. </p>
     *
     * <p> No component of the standard library throws exceptions of this type. It is designed as a standard
     * exception to be thrown by programs. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/underflow_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class UnderflowError extends RuntimeError {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message) {
            super(message);
        }
    }
    std.UnderflowError = UnderflowError;
    /**
     * <p> Range error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report range errors in internal
     * computations. </p>
     *
     * <p> It is a standard exception that can be thrown by programs. Some components of the standard library
     * also throw exceptions of this type to signal range errors. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
     *
     * @reference http://www.cplusplus.com/reference/stdexcept/range_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class RangeError extends RuntimeError {
        /**
         * <p> Construct from a message. </p>
         *
         * @param message A message representing specification about the Exception.
         */
        constructor(message) {
            super(message);
        }
    }
    std.RangeError = RangeError;
    /**
     * @hidden
     */
    var terminate_handler = null;
})(std || (std = {}));
/// <reference path="API.ts" />
// Standard Template Library: Function objects
// Function objects are objects specifically designed to be used with a syntax similar to that of functions.
//
// They are typically used as arguments to functions, such as predicates or comparison functions passed to standard algorithms.
//
// @reference http://www.cplusplus.com/reference/functional/
// @author Jeongho Nam <http://samchon.org>
var std;
(function (std) {
    /**
     * <p> Function object class for equality comparison. </p>
     *
     * <p> Binary function object class whose call returns whether its two arguments compare <i>equal</i> (as returned by
     * operator ==). </p>
     *
     * <p> Generically, function objects are instances of a class with member function {@link IComparable.equal_to equal_to}
     * defined. This member function allows the object to be used with the same syntax as a function call. </p>
     *
     * @param x First element to compare.
     * @param y Second element to compare.
     *
     * @return Whether the arguments are equal.
     */
    function equal_to(x, y) {
        if (x instanceof Object && x.equal_to != undefined)
            return x.equal_to(y);
        else
            return x == y;
    }
    std.equal_to = equal_to;
    /**
     * <p> Function object class for non-equality comparison. </p>
     *
     * <p> Binary function object class whose call returns whether its two arguments compare <i>not equal</i> (as returned
     * by operator operator!=). </p>
     *
     * <p> Generically, function objects are instances of a class with member function {@link IComparable.equal_to equal_to}
     * defined. This member function allows the object to be used with the same syntax as a function call. </p>
     *
     * @param x First element to compare.
     * @param y Second element to compare.
     *
     * @return Whether the arguments are not equal.
     */
    function not_equal_to(x, y) {
        return !std.equal_to(x, y);
    }
    std.not_equal_to = not_equal_to;
    /**
     * <p> Function for less-than inequality comparison. </p>
     *
     * <p> Binary function returns whether the its first argument compares less than the second. </p>
     *
     * <p> Generically, function objects are instances of a class with member function {@link IComparable.less less}
     * defined. If an object doesn't have the method, then its own uid will be used to compare insteadly.
     * This member function allows the object to be used with the same syntax as a function call. </p>
     *
     * <p> Objects of this class can be used on standard algorithms such as {@link sort sort()}</code>,
     * {@link merge merge()} or {@link TreeMap.lower_bound lower_bound()}. </p>
     *
     * @param <T> Type of arguments to compare by the function call. The type shall supporrt the operation
     *			  <i>operator<()</i> or method {@link IComparable.less less}.
     *
     * @param x First element, the standard of comparison.
     * @param y Second element compare with the first.
     *
     * @return Whether the first parameter is less than the second.
     */
    function less(x, y) {
        if (x instanceof Object)
            if (x.less != undefined)
                return x.less(y);
            else
                return x.__get_m_iUID() < y.__get_m_iUID();
        else
            return x < y;
    }
    std.less = less;
    /**
     * <p> Function object class for less-than-or-equal-to comparison. </p>
     *
     * <p> Binary function object class whose call returns whether the its first argument compares {@link less less than} or
     * {@link equal_to equal to} the second (as returned by operator <=). </p>
     *
     * <p> Generically, <i>function objects</i> are instances of a class with member function {@link IComparable.less less}
     * and {@link IComparable.equal_to equal_to} defined. This member function allows the object to be used with the same
     * syntax as a function call. </p>
     *
     * @param x First element, the standard of comparison.
     * @param y Second element compare with the first.
     *
     * @return Whether the <i>x</i> is {@link less less than} or {@link equal_to equal to} the <i>y</i>.
     */
    function less_equal(x, y) {
        return std.less(x, y) || std.equal_to(x, y);
    }
    std.less_equal = less_equal;
    /**
     * <p> Function for greater-than inequality comparison. </p>
     *
     * <p> Binary function returns whether the its first argument compares greater than the second. </p>
     *
     * <p> Generically, function objects are instances of a class with member function {@link less} and
     * {@link equal_to equal_to()} defined. If an object doesn't have those methods, then its own uid will be used
     * to compare insteadly. This member function allows the object to be used with the same syntax as a function
     * call. </p>
     *
     * <p> Objects of this class can be used on standard algorithms such as {@link sort sort()},
     * {@link merge merge()} or {@link TreeMap.lower_bound lower_bound()}. </p>
     *
     * @param <T> Type of arguments to compare by the function call. The type shall supporrt the operation
     *			  <i>operator>()</i> or method {@link IComparable.greater greater}.
     *
     * @return Whether the <i>x</i> is greater than the <i>y</i>.
     */
    function greater(x, y) {
        return !std.less_equal(x, y);
    }
    std.greater = greater;
    /**
     * <p> Function object class for greater-than-or-equal-to comparison. </p>
     *
     * <p> Binary function object class whose call returns whether the its first argument compares
     * {@link greater greater than} or {@link equal_to equal to} the second (as returned by operator >=). </p>
     *
     * <p> Generically, function objects are instances of a class with member function {@link IComparable.less less}
     * defined. If an object doesn't have the method, then its own uid will be used to compare insteadly.
     * This member function allows the object to be used with the same syntax as a function call. </p>
     *
     * @param x First element, the standard of comparison.
     * @param y Second element compare with the first.
     *
     * @return Whether the <i>x</i> is {@link greater greater than} or {@link equal_to equal to} the <i>y</i>.
     */
    function greater_equal(x, y) {
        return !std.less(x, y);
    }
    std.greater_equal = greater_equal;
    /**
     * <p> Logical AND function object class. </p>
     *
     * <p> Binary function object class whose call returns the result of the <i>logical "and"</i> operation between its two
     * arguments (as returned by operator &&). </p>
     *
     * <p> Generically, function objects are instances of a class with member function operator() defined. This member
     * function allows the object to be used with the same syntax as a function call. </p>
     *
     * @param x First element.
     * @param y Second element.
     *
     * @return Result of logical AND operation.
     */
    function logical_and(x, y) {
        return x && y;
    }
    std.logical_and = logical_and;
    /**
     * <p> Logical OR function object class. </p>
     *
     * <p> Binary function object class whose call returns the result of the <i>logical "or"</i> operation between its two
     * arguments (as returned by operator ||). </p>
     *
     * <p> Generically, function objects are instances of a class with member function operator() defined. This member
     * function allows the object to be used with the same syntax as a function call. </p>
     *
     * @param x First element.
     * @param y Second element.
     *
     * @return Result of logical OR operation.
     */
    function logical_or(x, y) {
        return x || y;
    }
    std.logical_or = logical_or;
    /**
     * <p> Logical NOT function object class. </p>
     *
     * <p> Unary function object class whose call returns the result of the <i>logical "not"</i> operation on its argument
     * (as returned by operator !). </p>
     *
     * <p> Generically, function objects are instances of a class with member function operator() defined. This member
     * function allows the object to be used with the same syntax as a function call. </p>
     *
     * @param x Target element.
     *
     * @return Result of logical NOT operation.
     */
    function logical_not(x) {
        return !x;
    }
    std.logical_not = logical_not;
    /**
     * <p> Bitwise AND function object class. </p>
     *
     * <p> Binary function object class whose call returns the result of applying the <i>bitwise "and"</i> operation between
     * its two arguments (as returned by operator &). </p>
     *
     * @param x First element.
     * @param y Second element.
     *
     * @return Result of bitwise AND operation.
     */
    function bit_and(x, y) {
        return x & y;
    }
    std.bit_and = bit_and;
    /**
     * <p> Bitwise OR function object class. </p>
     *
     * <p> Binary function object class whose call returns the result of applying the <i>bitwise "and"</i> operation between
     * its two arguments (as returned by operator &). </p>
     *
     * @param x First element.
     * @param y Second element.
     *
     * @return Result of bitwise OR operation.
     */
    function bit_or(x, y) {
        return x | y;
    }
    std.bit_or = bit_or;
    /**
     * <p> Bitwise XOR function object class. </p>
     *
     * <p> Binary function object class whose call returns the result of applying the <i>bitwise "exclusive or"</i>
     * operation between its two arguments (as returned by operator ^). </p>
     *
     * @param x First element.
     * @param y Second element.
     *
     * @return Result of bitwise XOR operation.
     */
    function bit_xor(x, y) {
        return x ^ y;
    }
    std.bit_xor = bit_xor;
    function hash(par) {
        let type = typeof par;
        if (type == "number")
            return hash_of_number(par);
        else if (type == "string")
            return hash_of_string(par);
        else
            return hash_of_object(par);
    }
    std.hash = hash;
    /**
     * @hidden
     */
    function hash_of_number(val) {
        // ------------------------------------------
        //	IN C++
        //		CONSIDER A NUMBER AS A STRING
        //		HASH<STRING>((CHAR*)&VAL, 8)
        // ------------------------------------------
        // CONSTRUCT BUFFER AND BYTE_ARRAY
        let buffer = new ArrayBuffer(8);
        let byteArray = new Int8Array(buffer);
        let valueArray = new Float64Array(buffer);
        valueArray[0] = val;
        let code = 2166136261;
        for (let i = 0; i < byteArray.length; i++) {
            let byte = (byteArray[i] < 0) ? byteArray[i] + 256 : byteArray[i];
            code ^= byte;
            code *= 16777619;
        }
        return Math.abs(code);
    }
    /**
     * @hidden
     */
    function hash_of_string(str) {
        let code = 2166136261;
        for (let i = 0; i < str.length; i++) {
            code ^= str.charCodeAt(i);
            code *= 16777619;
        }
        return Math.abs(code);
    }
    /**
     * @hidden
     */
    function hash_of_object(obj) {
        if (obj.hash != undefined)
            return obj.hash();
        else
            return hash_of_number(obj.__get_m_iUID());
    }
    /* ---------------------------------------------------------
        UNIQUE ID FOR OBJECTS
    --------------------------------------------------------- */
    // Incremental sequence of unique id for objects.
    /**
     * @hidden
     */
    var __s_iUID;
    if (__s_iUID == undefined)
        __s_iUID = 0;
    if (Object.prototype.hasOwnProperty("__get_m_iUID") == false) {
        Object.defineProperties(Object.prototype, {
            "__get_m_iUID": {
                value: function () {
                    if (this.hasOwnProperty("__m_iUID") == false) {
                        var uid = ++__s_iUID;
                        Object.defineProperty(this, "__m_iUID", {
                            "get": function () {
                                return uid;
                            }
                        });
                    }
                    return this.__m_iUID;
                }
            }
        });
    }
    function swap(left, right) {
        left.swap(right);
    }
    std.swap = swap;
})(std || (std = {}));
var std;
(function (std) {
    function bind(fn, ...args) {
        var this_arg = null;
        var parameters = [];
        var placeholder_count = 0;
        for (let i = 0; i < args.length; i++) {
            if (i == 0 && args[0] instanceof Object && args[0] instanceof std.placeholders.PlaceHolder == false) {
                // retrieve the object; items[0]
                for (let key in args[0])
                    if (args[0][key] == fn) {
                        // found the this_arg
                        this_arg = args[0];
                        break;
                    }
                if (this_arg != null)
                    continue;
            }
            // the placeholder also fills parameters
            if (args[i] instanceof std.placeholders.PlaceHolder)
                placeholder_count++;
            parameters.push(args[i]);
        }
        ////////////////////
        // FUNCTION TO BE RETURNED
        ////////////////////
        let ret = function (...args) {
            if (args.length == 0)
                return fn.apply(this_arg, parameters);
            let thisArg = this_arg;
            let argArray = parameters.slice();
            // 1st argument is thisArg?
            if (thisArg == null && (parameters.length == 0 || parameters[0] instanceof std.placeholders.PlaceHolder) && args[0] instanceof Object)
                for (let key in args[0])
                    if (args[0][key] == fn) {
                        thisArg = args[0];
                        argArray.splice(0, 1);
                        //lastIndex++;
                        break;
                    }
            // fill argArray from placeholders
            for (let i = 0; i < argArray.length; i++)
                if (argArray[i] instanceof std.placeholders.PlaceHolder)
                    argArray[i] = args[argArray[i].index - 1];
            // arguments are over the placeholder_count 
            if (args.length > placeholder_count)
                for (let i = placeholder_count; i < args.length; i++)
                    if (i == 0 && (this_arg == null && thisArg != null))
                        continue; // thisArg
                    else
                        argArray.push(args[i]);
            return fn.apply(thisArg, argArray);
        };
        return ret;
    }
    std.bind = bind;
})(std || (std = {}));
/**
 * <p> Bind argument placeholders. </p>
 *
 * <p> This namespace declares an unspecified number of objects: <i>_1</i>, <i>_2</i>, <i>_3</i>, ...</i>, which are
 * used to specify placeholders in calls to function {@link std.bind}. </p>
 *
 * <p> When the function object returned by bind is called, an argument with placeholder {@link _1} is replaced by the
 * first argument in the call, {@link _2} is replaced by the second argument in the call, and so on... For example: </p>
 *
 * <code>
 * let vec: Vector<number> = new Vector<number>();
 *
 * let bind = std.bind(Vector.insert, _1, vec.end(), _2, _3);
 * bind.apply(vec, 5, 1); // vec.insert(vec.end(), 5, 1);
 * // [1, 1, 1, 1, 1]
 * </code>
 *
 * <p> When a call to {@link bind} is used as a subexpression in another call to <i>bind</i>, the {@link placeholders}
 * are relative to the outermost {@link bind} expression. </p>
 *
 * @reference http://www.cplusplus.com/reference/functional/placeholders/
 * @author Jeongho Nam <http://samchon.org>
 */
var std;
(function (std) {
    var placeholders;
    (function (placeholders) {
        /**
         * @hidden
         */
        class PlaceHolder {
            constructor(index) {
                this.index_ = index;
            }
            get index() {
                return this.index_;
            }
        }
        placeholders.PlaceHolder = PlaceHolder;
        /**
         * Replaced by the first argument in the function call.
         */
        placeholders._1 = new PlaceHolder(1);
        /**
         * Replaced by the second argument in the function call.
         */
        placeholders._2 = new PlaceHolder(2);
        /**
         * Replaced by the third argument in the function call.
         */
        placeholders._3 = new PlaceHolder(3);
        placeholders._4 = new PlaceHolder(4);
        placeholders._5 = new PlaceHolder(5);
        placeholders._6 = new PlaceHolder(6);
        placeholders._7 = new PlaceHolder(7);
        placeholders._8 = new PlaceHolder(8);
        placeholders._9 = new PlaceHolder(9);
        placeholders._10 = new PlaceHolder(10);
        placeholders._11 = new PlaceHolder(11);
        placeholders._12 = new PlaceHolder(12);
        placeholders._13 = new PlaceHolder(13);
        placeholders._14 = new PlaceHolder(14);
        placeholders._15 = new PlaceHolder(15);
        placeholders._16 = new PlaceHolder(16);
        placeholders._17 = new PlaceHolder(17);
        placeholders._18 = new PlaceHolder(18);
        placeholders._19 = new PlaceHolder(19);
        placeholders._20 = new PlaceHolder(20);
    })(placeholders = std.placeholders || (std.placeholders = {}));
})(std || (std = {}));
/// <reference path="API.ts" />
/// <reference path="base/UniqueMap.ts" />
/// <reference path="base/MultiMap.ts" />
var std;
(function (std) {
    /**
     * <p> Hashed, unordered map. </p>
     *
     * <p> {@link HashMap}s are associative containers that store elements formed by the combination of a <i>key value</i>
     * and a <i>mapped value</i>, and which allows for fast retrieval of individual elements based on their <i>keys</i>.
     * </p>
     *
     * <p> In an {@link HashMap}, the <i>key value</i> is generally used to uniquely identify the element, while the
     * <i>mapped value</i> is an object with the content associated to this <i>key</i>. Types of <i>key</i> and
     * <i>mapped value</i> may differ. </p>
     *
     * <p> Internally, the elements in the {@link HashMap} are not sorted in any particular order with respect to either
     * their <i>key</i> or <i>mapped values</i>, but organized into <i>buckets</i> depending on their hash values to allow
     * for fast access to individual elements directly by their <i>key values</i> (with a constant average time complexity
     * on average). </p>
     *
     * <p> {@link HashMap} containers are faster than {@link TreeMap} containers to access individual elements by their
     * <i>key</i>, although they are generally less efficient for range iteration through a subset of their elements. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/map_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/map_containers.png" style="max-width: 100%" /> </a>
     * </p>
     *
     * <h3> Container properties </h3>
     * <dl>
     * 	<dt> Associative </dt>
     * 	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     * 	<dt> Hashed </dt>
     * 	<dd> Hashed containers organize their elements using hash tables that allow for fast access to elements
     *		 by their <i>key</i>. </dd>
     *
     * 	<dt> Map </dt>
     * 	<dd> Each element associates a <i>key</i> to a <i>mapped value</i>:
     *		 <i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>. </dd>
     *
     * 	<dt> Unique keys </dt>
     * 	<dd> No two elements in the container can have equivalent keys. </dd>
     * </dl>
     *
     * @param <Key> Type of the key values.
     *				Each element in an {@link HashMap} is uniquely identified by its key value.
     * @param <T> Type of the mapped value.
     *			  Each element in an {@link HashMap} is used to store some data as its mapped value.
     *
     * @reference http://www.cplusplus.com/reference/unordered_map/unordered_map
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashMap extends std.base.UniqueMap {
        constructor(...args) {
            // INIT MEMBERS
            super();
            this.hash_buckets_ = new std.base.MapHashBuckets(this);
            // BRANCH - METHOD OVERLOADINGS
            if (args.length == 0) {
            }
            else if (args.length == 1 && args[0] instanceof HashMap) {
                // COPY CONSTRUCTOR
                let container = args[0];
                this.assign(container.begin(), container.end());
            }
            else if (args.length == 1 && args[0] instanceof Array) {
                // INITIALIZER LIST CONSTRUCTOR
                let items = args[0];
                this.rehash(items.length * std.base.Hash.RATIO);
                this.push(...items);
            }
            else if (args.length == 2 && args[0] instanceof std.Iterator && args[1] instanceof std.Iterator) {
                // RANGE CONSTRUCTOR
                let first = args[0];
                let last = args[1];
                this.assign(first, last);
            }
        }
        /* ---------------------------------------------------------
            ASSIGN & CLEAR
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        clear() {
            this.hash_buckets_.clear();
            super.clear();
        }
        /* =========================================================
            ACCESSORS
                - MEMBER
                - HASH
        ============================================================
            MEMBER
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        find(key) {
            return this.hash_buckets_.find(key);
        }
        begin(index = -1) {
            if (index == -1)
                return super.begin();
            else
                return this.hash_buckets_.at(index).front();
        }
        end(index = -1) {
            if (index == -1)
                return super.end();
            else
                return this.hash_buckets_.at(index).back().next();
        }
        rbegin(index = -1) {
            if (index == -1)
                return super.rbegin();
            else
                return new std.MapReverseIterator(this.end(index));
        }
        rend(index = -1) {
            if (index == -1)
                return super.rend();
            else
                return new std.MapReverseIterator(this.begin(index));
        }
        /* ---------------------------------------------------------
            HASH
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        bucket_count() {
            return this.hash_buckets_.size();
        }
        /**
         * @inheritdoc
         */
        bucket_size(index) {
            return this.hash_buckets_.at(index).size();
        }
        max_load_factor(z = -1) {
            if (z == -1)
                return this.size() / this.bucket_count();
            else
                this.rehash(Math.ceil(this.bucket_count() / z));
        }
        /**
         * @inheritdoc
         */
        bucket(key) {
            return std.hash(key) % this.hash_buckets_.size();
        }
        /**
         * @inheritdoc
         */
        reserve(n) {
            this.hash_buckets_.rehash(Math.ceil(n * this.max_load_factor()));
        }
        /**
         * @inheritdoc
         */
        rehash(n) {
            if (n <= this.bucket_count())
                return;
            this.hash_buckets_.rehash(n);
        }
        /* =========================================================
            ELEMENTS I/O
                - INSERT
                - POST-PROCESS
                - SWAP
        ============================================================
            INSERT
        --------------------------------------------------------- */
        /**
         * @hidden
         */
        _Insert_by_pair(pair) {
            // TEST WHETHER EXIST
            let it = this.find(pair.first);
            if (it.equal_to(this.end()) == false)
                return std.make_pair(it, false);
            // INSERT
            this["data_"].push_back(pair);
            it = it.prev();
            // POST-PROCESS
            this._Handle_insert(it, it.next());
            return std.make_pair(it, true);
        }
        /**
         * @hidden
         */
        _Insert_by_hint(hint, pair) {
            // FIND KEY
            if (this.has(pair.first) == true)
                return this.end();
            // INSERT
            let it = this["data_"].insert(hint, pair);
            // POST-PROCESS
            this._Handle_insert(it, it.next());
            return it;
        }
        /**
         * @hidden
         */
        _Insert_by_range(first, last) {
            let my_first = this.end().prev();
            let size = 0;
            // INSERT ELEMENTS
            for (; !first.equal_to(last); first = first.next()) {
                // TEST WHETER EXIST
                if (this.has(first.value.first))
                    continue;
                // INSERTS
                this["data_"].push_back(std.make_pair(first.value.first, first.value.second));
                size++;
            }
            my_first = my_first.next();
            // IF NEEDED, HASH_BUCKET TO HAVE SUITABLE SIZE
            if (this.size() + size > this.hash_buckets_.size() * std.base.Hash.MAX_RATIO)
                this.hash_buckets_.rehash((this.size() + size) * std.base.Hash.RATIO);
            // POST-PROCESS
            this._Handle_insert(my_first, this.end());
        }
        /* ---------------------------------------------------------
            POST-PROCESS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        _Handle_insert(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this.hash_buckets_.insert(first);
        }
        /**
         * @inheritdoc
         */
        _Handle_erase(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this.hash_buckets_.erase(first);
        }
        /**
         * @inheritdoc
         */
        swap(obj) {
            if (obj instanceof HashMap) {
                this._Swap(obj);
                [this.hash_buckets_, obj.hash_buckets_] = [obj.hash_buckets_, this.hash_buckets_];
            }
            else
                super.swap(obj);
        }
    }
    std.HashMap = HashMap;
})(std || (std = {}));
/// <reference path="API.ts" />
/// <reference path="base/MultiMap.ts" />
var std;
(function (std) {
    /**
     * <p> Hashed, unordered Multimap. </p>
     *
     * <p> {@link HashMultiMap}s are associative containers that store elements formed by the combination of
     * a <i>key value</i> and a <i>mapped value</i>, much like {@link HashMultiMap} containers, but allowing
     * different elements to have equivalent <i>keys</i>. </p>
     *
     * <p> In an {@link HashMultiMap}, the <i>key value</i> is generally used to uniquely identify the
     * element, while the <i>mapped value</i> is an object with the content associated to this <i>key</i>.
     * Types of <i>key</i> and <i>mapped value</i> may differ. </p>
     *
     * <p> Internally, the elements in the {@link HashMultiMap} are not sorted in any particular order with
     * respect to either their <i>key</i> or <i>mapped values</i>, but organized into <i>buckets</i> depending on
     * their hash values to allow for fast access to individual elements directly by their <i>key values</i>
     * (with a constant average time complexity on average). </p>
     *
     * <p> Elements with equivalent <i>keys</i> are grouped together in the same bucket and in such a way that
     * an iterator can iterate through all of them. Iterators in the container are doubly linked iterators. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/map_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/map_containers.png" style="max-width: 100%" /> </a>
     * </p>
     *
     * <h3> Container properties </h3>
     * <dl>
     *	<dt> Associative </dt>
     *	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     *	<dt> Hashed </dt>
     *	<dd> Hashed containers organize their elements using hash tables that allow for fast access to elements
     *		 by their <i>key</i>. </dd>
     *
     *	<dt> Map </dt>
     *	<dd> Each element associates a <i>key</i> to a <i>mapped value</i>:
     *		 <i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>. </dd>
     *
     *	<dt> Multiple equivalent keys </dt>
     *	<dd> The container can hold multiple elements with equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <Key> Type of the key values.
     *				Each element in an {@link HashMultiMap} is identified by a key value.
     * @param <T> Type of the mapped value.
     *			  Each element in an {@link HashMultiMap} is used to store some data as its mapped value.
     *
     * @reference http://www.cplusplus.com/reference/unordered_map/unordered_multimap
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashMultiMap extends std.base.MultiMap {
        constructor(...args) {
            // INIT MEMBERS
            super();
            this.hash_buckets_ = new std.base.MapHashBuckets(this);
            // BRANCH - METHOD OVERLOADINGS
            if (args.length == 0) {
            }
            else if (args.length == 1 && args[0] instanceof HashMultiMap) {
                // COPY CONSTRUCTOR
                let container = args[0];
                this.assign(container.begin(), container.end());
            }
            else if (args.length == 1 && args[0] instanceof Array) {
                // INITIALIZER LIST CONSTRUCTOR
                let items = args[0];
                this.rehash(items.length * std.base.Hash.RATIO);
                this.push(...items);
            }
            else if (args.length == 2 && args[0] instanceof std.Iterator && args[1] instanceof std.Iterator) {
                // RANGE CONSTRUCTOR
                let first = args[0];
                let last = args[1];
                this.assign(first, last);
            }
        }
        /* ---------------------------------------------------------
            ASSIGN & CLEAR
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        clear() {
            this.hash_buckets_.clear();
            super.clear();
        }
        /* =========================================================
            ACCESSORS
                - MEMBER
                - HASH
        ============================================================
            MEMBER
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        find(key) {
            return this.hash_buckets_.find(key);
        }
        /**
         * @inheritdoc
         */
        count(key) {
            // FIND MATCHED BUCKET
            let index = std.hash(key) % this.hash_buckets_.item_size();
            let bucket = this.hash_buckets_.at(index);
            // ITERATE THE BUCKET
            let cnt = 0;
            for (let i = 0; i < bucket.length; i++)
                if (std.equal_to(bucket[i].first, key))
                    cnt++;
            return cnt;
        }
        begin(index = -1) {
            if (index == -1)
                return super.begin();
            else
                return this.hash_buckets_.at(index).front();
        }
        end(index = -1) {
            if (index == -1)
                return super.end();
            else
                return this.hash_buckets_.at(index).back().next();
        }
        rbegin(index = -1) {
            return new std.MapReverseIterator(this.end(index));
        }
        rend(index = -1) {
            return new std.MapReverseIterator(this.begin(index));
        }
        /* ---------------------------------------------------------
            HASH
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        bucket_count() {
            return this.hash_buckets_.size();
        }
        /**
         * @inheritdoc
         */
        bucket_size(n) {
            return this.hash_buckets_.at(n).size();
        }
        max_load_factor(z = -1) {
            if (z == -1)
                return this.size() / this.bucket_count();
            else
                this.rehash(Math.ceil(this.bucket_count() / z));
        }
        /**
         * @inheritdoc
         */
        bucket(key) {
            return std.hash(key) % this.hash_buckets_.size();
        }
        /**
         * @inheritdoc
         */
        reserve(n) {
            this.hash_buckets_.rehash(Math.ceil(n * this.max_load_factor()));
        }
        /**
         * @inheritdoc
         */
        rehash(n) {
            if (n <= this.bucket_count())
                return;
            this.hash_buckets_.rehash(n);
        }
        /* =========================================================
            ELEMENTS I/O
                - INSERT
                - POST-PROCESS
                - SWAP
        ============================================================
            INSERT
        --------------------------------------------------------- */
        /**
         * @hidden
         */
        _Insert_by_pair(pair) {
            // INSERT
            let it = this["data_"].insert(this["data_"].end(), pair);
            this._Handle_insert(it, it.next()); // POST-PROCESS
            return it;
        }
        /**
         * @hidden
         */
        _Insert_by_hint(hint, pair) {
            // INSERT
            let it = this["data_"].insert(hint, pair);
            // POST-PROCESS
            this._Handle_insert(it, it.next());
            return it;
        }
        /**
         * @hidden
         */
        _Insert_by_range(first, last) {
            // INSERT ELEMENTS
            let my_first = this["data_"].insert(this["data_"].end(), first, last);
            // IF NEEDED, HASH_BUCKET TO HAVE SUITABLE SIZE
            if (this.size() > this.hash_buckets_.item_size() * std.base.Hash.MAX_RATIO)
                this.hash_buckets_.rehash(this.size() * std.base.Hash.RATIO);
            // POST-PROCESS
            this._Handle_insert(my_first, this.end());
        }
        /* ---------------------------------------------------------
            POST-PROCESS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        _Handle_insert(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this.hash_buckets_.insert(first);
        }
        /**
         * @inheritdoc
         */
        _Handle_erase(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this.hash_buckets_.erase(first);
        }
        /**
         * @inheritdoc
         */
        swap(obj) {
            if (obj instanceof HashMultiMap) {
                this._Swap(obj);
                [this.hash_buckets_, obj.hash_buckets_] = [obj.hash_buckets_, this.hash_buckets_];
            }
            else
                super.swap(obj);
        }
    }
    std.HashMultiMap = HashMultiMap;
})(std || (std = {}));
/// <reference path="API.ts" />
/// <reference path="base/MultiSet.ts" />
var std;
(function (std) {
    /**
     * <p> Hashed, unordered Multiset. </p>
     *
     * <p> {@link HashMultiSet HashMultiSets} are containers that store elements in no particular order, allowing fast
     * retrieval of individual elements based on their value, much like {@link HashMultiSet} containers,
     * but allowing different elements to have equivalent values. </p>
     *
     * <p> In an {@link HashMultiSet}, the value of an element is at the same time its <i>key</i>, used to
     * identify it. <i>Keys</i> are immutable, therefore, the elements in an {@link HashMultiSet} cannot be
     * modified once in the container - they can be inserted and removed, though. </p>
     *
     * <p> Internally, the elements in the {@link HashMultiSet} are not sorted in any particular, but
     * organized into <i>buckets</i> depending on their hash values to allow for fast access to individual
     * elements directly by their <i>values</i> (with a constant average time complexity on average). </p>
     *
     * <p> Elements with equivalent values are grouped together in the same bucket and in such a way that an
     * iterator can iterate through all of them. Iterators in the container are doubly linked iterators. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/set_containers.png" style="max-width: 100%" /></a> </p>
     *
     * <h3> Container properties </h3>
     * <dl>
     *	<dt> Associative </dt>
     *	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     *	<dt> Hashed </dt>
     *	<dd> Hashed containers organize their elements using hash tables that allow for fast access to elements
     *		 by their <i>key</i>. </dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     *
     *	<dt> Multiple equivalent keys </dt>
     *	<dd> The container can hold multiple elements with equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <T> Type of the elements.
     *		   Each element in an {@link UnorderedMultiSet} is also identified by this value..
     *
     * @reference http://www.cplusplus.com/reference/unordered_set/unordered_multiset
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashMultiSet extends std.base.MultiSet {
        constructor(...args) {
            // INIT MEMBERS
            super();
            /**
             * @hidden
             */
            this.hash_buckets_ = new std.base.SetHashBuckets(this);
            this.hash_buckets_ = new std.base.SetHashBuckets(this);
            // BRANCH - METHOD OVERLOADINGS
            if (args.length == 0) {
            }
            else if (args.length == 1 && args[0] instanceof HashMultiSet) {
                // COPY CONSTRUCTOR
                let container = args[0];
                this.assign(container.begin(), container.end());
            }
            else if (args.length == 1 && args[0] instanceof Array) {
                // INITIALIZER LIST CONSTRUCTOR
                let items = args[0];
                this.rehash(items.length * std.base.Hash.RATIO);
                this.push(...items);
            }
            else if (args.length == 2 && args[0] instanceof std.Iterator && args[1] instanceof std.Iterator) {
                // RANGE CONSTRUCTOR
                let first = args[0];
                let last = args[1];
                this.assign(first, last);
            }
        }
        /* ---------------------------------------------------------
            ASSIGN & CLEAR
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        clear() {
            this.hash_buckets_.clear();
            super.clear();
        }
        /* =========================================================
            ACCESSORS
                - MEMBER
                - HASH
        ============================================================
            MEMBER
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        find(key) {
            return this.hash_buckets_.find(key);
        }
        /**
         * @inheritdoc
         */
        count(key) {
            // FIND MATCHED BUCKET
            let index = std.hash(key) % this.hash_buckets_.item_size();
            let bucket = this.hash_buckets_.at(index);
            // ITERATE THE BUCKET
            let cnt = 0;
            for (let i = 0; i < bucket.length; i++)
                if (std.equal_to(bucket[i].value, key))
                    cnt++;
            return cnt;
        }
        begin(index = -1) {
            if (index == -1)
                return super.begin();
            else
                return this.hash_buckets_.at(index).front();
        }
        end(index = -1) {
            if (index == -1)
                return super.end();
            else
                return this.hash_buckets_.at(index).back().next();
        }
        rbegin(index = -1) {
            if (index == -1)
                return super.rbegin();
            else
                return new std.SetReverseIterator(this.end(index));
        }
        rend(index = -1) {
            if (index == -1)
                return super.rend();
            else
                return new std.SetReverseIterator(this.begin(index));
        }
        /* ---------------------------------------------------------
            HASH
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        bucket_count() {
            return this.hash_buckets_.size();
        }
        /**
         * @inheritdoc
         */
        bucket_size(n) {
            return this.hash_buckets_.at(n).size();
        }
        max_load_factor(z = -1) {
            if (z == -1)
                return this.size() / this.bucket_count();
            else
                this.rehash(Math.ceil(this.bucket_count() / z));
        }
        /**
         * @inheritdoc
         */
        bucket(key) {
            return std.hash(key) % this.hash_buckets_.size();
        }
        /**
         * @inheritdoc
         */
        reserve(n) {
            this.hash_buckets_.rehash(Math.ceil(n * this.max_load_factor()));
        }
        /**
         * @inheritdoc
         */
        rehash(n) {
            if (n <= this.bucket_count())
                return;
            this.hash_buckets_.rehash(n);
        }
        /* =========================================================
            ELEMENTS I/O
                - INSERT
                - POST-PROCESS
                - SWAP
        ============================================================
            INSERT
        --------------------------------------------------------- */
        /**
         * @hidden
         */
        _Insert_by_val(val) {
            // INSERT
            let it = this["data_"].insert(this["data_"].end(), val);
            this._Handle_insert(it, it.next()); // POST-PROCESS
            return it;
        }
        /**
         * @hidden
         */
        _Insert_by_hint(hint, val) {
            // INSERT
            let it = this["data_"].insert(hint, val);
            // POST-PROCESS
            this._Handle_insert(it, it.next());
            return it;
        }
        /**
         * @hidden
         */
        _Insert_by_range(first, last) {
            // INSERT ELEMENTS
            let my_first = this["data_"].insert(this["data_"].end(), first, last);
            // IF NEEDED, HASH_BUCKET TO HAVE SUITABLE SIZE
            if (this.size() > this.hash_buckets_.item_size() * std.base.Hash.MAX_RATIO)
                this.hash_buckets_.rehash(this.size() * std.base.Hash.RATIO);
            // POST-PROCESS
            this._Handle_insert(my_first, this.end());
        }
        /* ---------------------------------------------------------
            POST-PROCESS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        _Handle_insert(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this.hash_buckets_.insert(first);
        }
        /**
         * @inheritdoc
         */
        _Handle_erase(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this.hash_buckets_.erase(first);
        }
        swap(obj) {
            if (obj instanceof HashMultiSet) {
                this._Swap(obj);
                [this.hash_buckets_, obj.hash_buckets_] = [obj.hash_buckets_, this.hash_buckets_];
            }
            else
                super.swap(obj);
        }
    }
    std.HashMultiSet = HashMultiSet;
})(std || (std = {}));
/// <reference path="API.ts" />
/// <reference path="base/UniqueSet.ts" />
var std;
(function (std) {
    /**
     * <p> Hashed, unordered set. </p>
     *
     * <p> {@link HashSet}s are containers that store unique elements in no particular order, and which
     * allow for fast retrieval of individual elements based on their value. </p>
     *
     * <p> In an {@link HashSet}, the value of an element is at the same time its <i>key</i>, that
     * identifies it uniquely. Keys are immutable, therefore, the elements in an {@link HashSet} cannot be
     * modified once in the container - they can be inserted and removed, though. </p>
     *
     * <p> Internally, the elements in the {@link HashSet} are not sorted in any particular order, but
     * organized into buckets depending on their hash values to allow for fast access to individual elements
     * directly by their <i>values</i> (with a constant average time complexity on average). </p>
     *
     * <p> {@link HashSet} containers are faster than {@link TreeSet} containers to access individual
     * elements by their <i>key</i>, although they are generally less efficient for range iteration through a
     * subset of their elements. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/set_containers.png" style="max-width: 100%" /></a> </p>
     *
     * <h3> Container properties </h3>
     * <dl>
     *	<dt> Associative </dt>
     *	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     *	<dt> Hashed </dt>
     *	<dd> Hashed containers organize their elements using hash tables that allow for fast access to elements
     *		 by their <i>key</i>. </dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     *
     *	<dt> Unique keys </dt>
     *	<dd> No two elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <T> Type of the elements.
     *			  Each element in an {@link HashSet} is also uniquely identified by this value.
     *
     * @reference http://www.cplusplus.com/reference/unordered_set/unordered_set
     * @author Jeongho Nam <http://samchon.org>
     */
    class HashSet extends std.base.UniqueSet {
        constructor(...args) {
            // INIT MEMBERS
            super();
            /**
             * @hidden
             */
            this.hash_buckets_ = new std.base.SetHashBuckets(this);
            this.hash_buckets_ = new std.base.SetHashBuckets(this);
            // BRANCH - METHOD OVERLOADINGS
            if (args.length == 0) {
            }
            else if (args.length == 1 && args[0] instanceof HashSet) {
                // COPY CONSTRUCTOR
                let container = args[0];
                this.assign(container.begin(), container.end());
            }
            else if (args.length == 1 && args[0] instanceof Array) {
                // INITIALIZER LIST CONSTRUCTOR
                let items = args[0];
                this.rehash(items.length * std.base.Hash.RATIO);
                this.push(...items);
            }
            else if (args.length == 2 && args[0] instanceof std.Iterator && args[1] instanceof std.Iterator) {
                // RANGE CONSTRUCTOR
                let first = args[0];
                let last = args[1];
                this.assign(first, last);
            }
        }
        /* ---------------------------------------------------------
            ASSIGN & CLEAR
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        clear() {
            this.hash_buckets_.clear();
            super.clear();
        }
        /* =========================================================
            ACCESSORS
                - MEMBER
                - HASH
        ============================================================
            MEMBER
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        find(key) {
            return this.hash_buckets_.find(key);
        }
        begin(index = -1) {
            if (index == -1)
                return super.begin();
            else
                return this.hash_buckets_.at(index).front();
        }
        end(index = -1) {
            if (index == -1)
                return super.end();
            else
                return this.hash_buckets_.at(index).back().next();
        }
        rbegin(index = -1) {
            if (index == -1)
                return super.rbegin();
            else
                return new std.SetReverseIterator(this.end(index));
        }
        rend(index = -1) {
            if (index == -1)
                return super.rend();
            else
                return new std.SetReverseIterator(this.begin(index));
        }
        /* ---------------------------------------------------------
            HASH
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        bucket_count() {
            return this.hash_buckets_.size();
        }
        /**
         * @inheritdoc
         */
        bucket_size(n) {
            return this.hash_buckets_.at(n).size();
        }
        max_load_factor(z = -1) {
            if (z == -1)
                return this.size() / this.bucket_count();
            else
                this.rehash(Math.ceil(this.bucket_count() / z));
        }
        /**
         * @inheritdoc
         */
        bucket(key) {
            return std.hash(key) % this.hash_buckets_.size();
        }
        /**
         * @inheritdoc
         */
        reserve(n) {
            this.hash_buckets_.rehash(Math.ceil(n * this.max_load_factor()));
        }
        /**
         * @inheritdoc
         */
        rehash(n) {
            if (n <= this.bucket_count())
                return;
            this.hash_buckets_.rehash(n);
        }
        /* =========================================================
            ELEMENTS I/O
                - INSERT
                - POST-PROCESS
                - SWAP
        ============================================================
            INSERT
        --------------------------------------------------------- */
        /**
         * @hidden
         */
        _Insert_by_val(val) {
            // TEST WHETHER EXIST
            let it = this.find(val);
            if (it.equal_to(this.end()) == false)
                return std.make_pair(it, false);
            // INSERT
            this["data_"].push_back(val);
            it = it.prev();
            // POST-PROCESS
            this._Handle_insert(it, it.next());
            return std.make_pair(it, true);
        }
        /**
         * @hidden
         */
        _Insert_by_hint(hint, val) {
            // FIND KEY
            if (this.has(val) == true)
                return this.end();
            // INSERT
            let it = this["data_"].insert(hint, val);
            // POST-PROCESS
            this._Handle_insert(it, it.next());
            return it;
        }
        /**
         * @hidden
         */
        _Insert_by_range(first, last) {
            let my_first = this.end().prev();
            let size = 0;
            for (; !first.equal_to(last); first = first.next()) {
                // TEST WHETER EXIST
                if (this.has(first.value))
                    continue;
                // INSERTS
                this["data_"].push_back(first.value);
                size++;
            }
            my_first = my_first.next();
            // IF NEEDED, HASH_BUCKET TO HAVE SUITABLE SIZE
            if (this.size() + size > this.hash_buckets_.size() * std.base.Hash.MAX_RATIO)
                this.hash_buckets_.rehash((this.size() + size) * std.base.Hash.RATIO);
            // INSERTS
            this._Handle_insert(my_first, this.end());
        }
        /* ---------------------------------------------------------
            POST-PROCESS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        _Handle_insert(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this.hash_buckets_.insert(first);
        }
        /**
         * @inheritdoc
         */
        _Handle_erase(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this.hash_buckets_.erase(first);
        }
        swap(obj) {
            if (obj instanceof HashSet) {
                this._Swap(obj);
                [this.hash_buckets_, obj.hash_buckets_] = [obj.hash_buckets_, this.hash_buckets_];
            }
            else
                super.swap(obj);
        }
    }
    std.HashSet = HashSet;
})(std || (std = {}));
/// <reference path="API.ts" />
var std;
(function (std) {
    /**
     * <p> FIFO queue. </p>
     *
     * <p> {@link Queue}s are a type of container adaptor, specifically designed to operate in a FIFO context
     * (first-in first-out), where elements are inserted into one end of the container and extracted from the other.
     * </p>
     *
     * <p> {@link Queue}s are implemented as containers adaptors, which are classes that use an encapsulated object of
     * a specific container class as its underlying container, providing a specific set of member functions to access
     * its elements. Elements are pushed into the {@link IDeque.back back()} of the specific container and popped from
     * its {@link IDeque.front front()}. </p>
     *
     * <p> {@link container_ The underlying container} may be one of the standard container class template or some
     * other specifically designed container class. This underlying container shall support at least the following
     * operations: </p>
     *
     * <ul>
     *	<li> empty </li>
     *	<li> size </li>
     *	<li> front </li>
     *	<li> back </li>
     *	<li> push_back </li>
     *	<li> pop_front </li>
     * </ul>
     *
     * <p> The standard container classes {@link Deque} and {@link List} fulfill these requirements.
     * By default, if no container class is specified for a particular {@link Queue} class instantiation, the standard
     * container {@link List} is used. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
     * </p>
     *
     * @param <T> Type of elements.
     *
     * @reference http://www.cplusplus.com/reference/queue/queue
     * @author Jeongho Nam <http://samchon.org>
     */
    class Queue {
        constructor(queue = null) {
            this.container_ = new std.List();
            if (queue != null)
                this.container_.assign(queue.container_.begin(), queue.container_.end());
        }
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * <p> Return size. </p>
         * <p> Returns the number of elements in the {@link Queue}. </p>
         *
         * <p> This member function effectively calls member {@link IDeque.size size()} of the
         * {@link container_ underlying container} object. </p>
         *
         * @return The number of elements in the {@link container_ underlying container}.
         */
        size() {
            return this.container_.size();
        }
        /**
         * <p> Test whether container is empty. </p>
         * <p> returns whether the {@link Queue} is empty: i.e. whether its <i>size</i> is zero. </p>
         *
         * <p> This member function efeectively calls member {@link IDeque.empty empty()} of the
         * {@link container_ underlying container} object. </p>
         *
         * @return <code>true</code> if the {@link container_ underlying container}'s size is 0,
         *		   <code>false</code> otherwise. </p>
         */
        empty() {
            return this.container_.empty();
        }
        /**
         * <p> Access next element. </p>
         * <p> Returns a value of the next element in the {@link Queue}. </p>
         *
         * <p> The next element is the "oldest" element in the {@link Queue} and the same element that is popped out
         * from the queue when {@link pop Queue.pop()} is called. </p>
         *
         * <p> This member function effectively calls member {@link IDeque.front front()} of the
         * {@link container_ underlying container} object. </p>
         *
         * @return A value of the next element in the {@link Queue}.
         */
        front() {
            return this.container_.front();
        }
        /**
         * <p> Access last element. </p>
         *
         * <p> Returns a vaue of the last element in the queue. This is the "newest" element in the queue (i.e. the
         * last element pushed into the queue). </p>
         *
         * <p> This member function effectively calls the member function {@link IDeque.back back()} of the
         * {@link container_ underlying container} object. </p>
         *
         * @return A value of the last element in the {@link Queue}.
         */
        back() {
            return this.container_.back();
        }
        /* ---------------------------------------------------------
            ELEMENTS I/O
        --------------------------------------------------------- */
        /**
         * <p> Insert element. </p>
         *
         * <p> Inserts a new element at the end of the {@link Queue}, after its current last element.
         * The content of this new element is initialized to <i>val</i>. </p>
         *
         * <p> This member function effectively calls the member function {@link IDeque.push_back push_back()} of the
         * {@link container_ underlying container} object. </p>
         *
         * @param val Value to which the inserted element is initialized.
         */
        push(val) {
            this.container_.push_back(val);
        }
        /**
         * <p> Remove next element. </p>
         *
         * <p> Removes the next element in the {@link Queue}, effectively reducing its size by one. </p>
         *
         * <p> The element removed is the "oldest" element in the {@link Queue} whose value can be retrieved by calling
         * member {@link front Queue.front()} </p>.
         *
         * <p> This member function effectively calls the member function {@link IDeque.pop_front pop_front()} of the
         * {@link container_ underlying container} object. </p>
         */
        pop() {
            this.container_.pop_front();
        }
        /**
         * <p> Swap contents. </p>
         *
         * <p> Exchanges the contents of the container adaptor (<i>this</i>) by those of <i>obj</i>. </p>
         *
         * <p> This member function calls the non-member function {@link IContainer.swap swap} (unqualified) to swap
         * the {@link container_ underlying containers}. </p>
         *
         * @param obj Another {@link Queue} container adaptor of the same type (i.e., instantiated with the same
         *			  template parameter, <b>T</b>). Sizes may differ. </p>
         */
        swap(obj) {
            this.container_.swap(obj.container_);
        }
    }
    std.Queue = Queue;
})(std || (std = {}));
/// <reference path="API.ts" />
var std;
(function (std) {
    /**
     * <p> Priority queue. </p>
     *
     * <p> {@link PriorityQueue Priority queues} are a type of container adaptors, specifically designed such that its
     * first element is always the greatest of the elements it contains, according to some <i>strict weak ordering</i>
     * criterion. </p>
     *
     * <p> This context is similar to a <i>heap</i>, where elements can be inserted at any moment, and only the
     * <i>max heap</i> element can be retrieved (the one at the top in the {@link PriorityQueue priority queue}). </p>
     *
     * <p> {@link PriorityQueue Priority queues} are implemented as <i>container adaptors</i>, which are classes that
     * use an encapsulated object of a specific container class as its {@link container_ underlying container},
     * providing a specific set of member functions to access its elements. Elements are popped from the <i>"back"</i>
     * of the specific container, which is known as the <i>top</i> of the {@link PriorityQueue Priority queue}. </p>
     *
     * <p> The {@link container_ underlying container} may be any of the standard container class templates or some
     * other specifically designed container class. The container shall be accessible through
     * {@link IArrayIterator random access iterators} and support the following operations: </p>
     *
     * <ul>
     *	<li> empty() </li>
     *	<li> size() </li>
     *	<li> front() </li>
     *	<li> push_back() </li>
     *	<li> pop_back() </li>
     * </ul>
     *
     * <p> The standard container classes {@link Vector} and {@link Deque} fulfill these requirements. By default, if
     * no container class is specified for a particular {@link PriorityQueue} class instantiation, the standard
     * container {@link Vector} is used. </p>
     *
     * <p> Support of {@link IArrayIterator random access iterators} is required to keep a heap structure internally
     * at all times. This is done automatically by the container adaptor by automatically calling the algorithm
     * functions <i>make_heap</i>, <i>push_heap</i> and <i>pop_heap</i> when needed. </p>
     *
     * @param <T> Type of the elements.
     *
     * @reference http://www.cplusplus.com/reference/queue/priority_queue/
     * @author Jeongho Nam
     */
    class PriorityQueue {
        constructor(...args) {
            // INIT MEMBER
            this.container_ = new std.TreeMultiSet();
            if (args.length >= 1 && args[0] instanceof std.base.Container) {
                // COPY CONSTRUCTOR
                let container = args[0]; // PARAMETER
                if (args.length == 2)
                    this.container_["tree_"]["compare_"] = (args[1]);
                this.container_.assign(container.begin(), container.end());
            }
            else if (args.length >= 1 && args[0] instanceof Array) {
                // INITIALIZER LIST CONSTRUCTOR
                let items = args[0]; // PARAMETER
                if (args.length == 2)
                    this.container_["tree_"]["compare_"] = (args[1]);
                this.container_.push(...items);
            }
            else if (args.length >= 2 && args[0] instanceof std.Iterator && args[1] instanceof std.Iterator) {
                // RANGE CONSTRUCTOR
                let first = args[0]; // PARAMETER 1
                let last = args[1]; // PARAMETER 2
                if (args.length == 2)
                    this.container_["tree_"]["compare_"] = (args[2]);
                this.container_.assign(first, last);
            }
            else if (args.length == 1) {
                // DEFAULT CONSTRUCTOR WITH SPECIFIED COMPARISON FUNCTION
                this.container_["tree_"]["compare_"] = (args[0]);
            }
        }
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * <p> Return size. </p>
         *
         * <p> Returns the number of elements in the {@link PriorityQueue}. </p>
         *
         * <p> This member function effectively calls member {@link IArray.size size} of the
         * {@link container_ underlying container} object. </p>
         *
         * @return The number of elements in the underlying
         */
        size() {
            return this.container_.size();
        }
        /**
         * <p> Test whether container is empty. </p>
         *
         * <p> Returns whether the {@link PriorityQueue} is empty: i.e. whether its {@link size} is zero. </p>
         *
         * <p> This member function effectively calls member {@link IARray.empty empty} of the
         * {@link container_ underlying container} object. </p>
         */
        empty() {
            return this.container_.empty();
        }
        /* ---------------------------------------------------------
            ELEMENTS I/O
        --------------------------------------------------------- */
        /**
         * <p> Access top element. </p>
         *
         * <p> Returns a constant reference to the top element in the {@link PriorityQueue}. </p>
         *
         * <p> The top element is the element that compares higher in the {@link PriorityQueue}, and the next that is
         * removed from the container when {@link PriorityQueue.pop} is called. </p>
         *
         * <p> This member function effectively calls member {@link IArray.front front} of the
         * {@link container_ underlying container} object. </p>
         *
         * @return A reference to the top element in the {@link PriorityQueue}.
         */
        top() {
            return this.container_.begin().value;
        }
        /**
         * <p> Insert element. </p>
         *
         * <p> Inserts a new element in the {@link PriorityQueue}. The content of this new element is initialized to
         * <i>val</i>.
         *
         * <p> This member function effectively calls the member function {@link IArray.push_back push_back} of the
         * {@link container_ underlying container} object, and then reorders it to its location in the heap by calling
         * the <i>push_heap</i> algorithm on the range that includes all the elements of the  </p>
         *
         * @param val Value to which the inserted element is initialized.
         */
        push(val) {
            this.container_.insert(val);
        }
        /**
         * <p> Remove top element. </p>
         *
         * <p> Removes the element on top of the {@link PriorityQueue}, effectively reducing its {@link size} by one.
         * The element removed is the one with the highest (or lowest) value. </p>
         *
         * <p> The value of this element can be retrieved before being popped by calling member
         * {@link PriorityQueue.top}. </p>
         *
         * <p> This member function effectively calls the <i>pop_heap</i> algorithm to keep the heap property of
         * {@link PriorityQueue PriorityQueues} and then calls the member function {@link IArray.pop_back pop_back} of
         * the {@link container_ underlying container} object to remove the element. </p>
         */
        pop() {
            this.container_.erase(this.container_.begin());
        }
        /**
         * <p> Swap contents. </p>
         *
         * <p> Exchanges the contents of the container adaptor by those of <i>obj</i>, swapping both the
         * {@link container_ underlying container} value and their comparison function using the corresponding
         * {@link std.swap swap} non-member functions (unqualified). </p>
         *
         * <p> This member function has a <i>noexcept</i> specifier that matches the combined <i>noexcept</i> of the
         * {@link IArray.swap swap} operations on the {@link container_ underlying container} and the comparison
         * functions. </p>
         *
         * @param obj {@link PriorityQueue} container adaptor of the same type (i.e., instantiated with the same
         *			  template parameters, <b>T</b>). Sizes may differ.
         */
        swap(obj) {
            this.container_.swap(obj.container_);
        }
    }
    std.PriorityQueue = PriorityQueue;
})(std || (std = {}));
/// <reference path="API.ts" />
var std;
(function (std) {
    /**
     * <p> LIFO stack. </p>
     *
     * <p> {@link Stack}s are a type of container adaptor, specifically designed to operate in a LIFO context
     * (last-in first-out), where elements are inserted and extracted only from one end of the  </p>
     *
     * <p> {@link Stack}s are implemented as containers adaptors, which are classes that use an encapsulated object of
     * a specific container class as its <i>underlying container</i>, providing a specific set of member functions to
     * access its elements. Elements are pushed/popped from the {@link ILinearContainer.back back()} of the
     * {@link ILinearContainer specific container}, which is known as the top of the {@link Stack}. </p>
     *
     * <p> {@link container_ The underlying container} may be any of the standard container class templates or some
     * other specifically designed container class. The container shall support the following operations: </p>
     *
     * <ul>
     *	<li> empty </li>
     *	<li> size </li>
     *	<li> front </li>
     *	<li> back </li>
     *	<li> push_back </li>
     *	<li> pop_back </li>
     * </ul>
     *
     * <p> The standard container classes {@link Vector}, {@link Deque} and {@link List} fulfill these requirements.
     * By default, if no container class is specified for a particular {@link Stack} class instantiation, the standard
     * container {@link List} is used. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/class_diagram/linear_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
     * </p>
     *
     * @param <T> Type of elements.
     *
     * @reference http://www.cplusplus.com/reference/stack/stack
     * @author Jeongho Nam <http://samchon.org>
     */
    class Stack {
        constructor(stack = null) {
            this.container_ = new std.List();
            if (stack != null)
                this.container_.assign(stack.container_.begin(), stack.container_.end());
        }
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * <p> Return size. </p>
         *
         * <p> Returns the number of elements in the {@link Stack}. </p>
         *
         * <p> This member function effectively calls member {@link ILinearContainer.size size()} of the
         * {@link container_ underlying container} object. </p>
         *
         * @return The number of elements in the {@link container_ underlying container}.
         */
        size() {
            return this.container_.size();
        }
        /**
         * <p> Test whether container is empty. </p>
         *
         * <p> returns whether the {@link Stack} is empty: i.e. whether its <i>size</i> is zero. </p>
         *
         * <p> This member function effectively calls member {@link ILinearContainer.empty empty()} of the
         * {@link container_ underlying container} object. </p>
         *
         * @return <code>true</code> if the <i>underlying container</i>'s size is 0,
         *		   <code>false</code> otherwise. </p>
         */
        empty() {
            return this.container_.empty();
        }
        /**
         * <p> Access next element. </p>
         *
         * <p> Returns a value of the top element in the {@link Stack} </p>.
         *
         * <p> Since {@link Stack}s are last-in first-out containers, the top element is the last element inserted into
         * the {@link Stack}. </p>
         *
         * <p> This member function effectively calls member {@link ILinearContainer.back back()} of the
         * {@link container_ underlying container} object. </p>
         *
         * @return A value of the top element in the {@link Stack}.
         */
        top() {
            return this.container_.back();
        }
        /* ---------------------------------------------------------
            ELEMENTS I/O
        --------------------------------------------------------- */
        /**
         * <p> Insert element. </p>
         *
         * <p> Inserts a new element at the top of the {@link Stack}, above its current top element. </p>
         *
         * <p> This member function effectively calls the member function
         * {@link ILinearContainer.push_back push_back()} of the {@link container_ underlying container} object. </p>
         *
         * @param val Value to which the inserted element is initialized.
         */
        push(val) {
            this.container_.push_back(val);
        }
        /**
         * <p> Remove top element. </p>
         *
         * <p> Removes the element on top of the {@link Stack}, effectively reducing its size by one. </p>
         *
         * <p> The element removed is the latest element inserted into the {@link Stack}, whose value can be retrieved
         * by calling member {@link top Stack.top()} </p>.
         *
         * <p> This member function effectively calls the member function {@link ILinearContainer.pop_back pop_back()}
         * of the {@link container_ underlying container} object. </p>
         */
        pop() {
            this.container_.pop_back();
        }
        /**
         * <p> Swap contents. </p>
         *
         * <p> Exchanges the contents of the container adaptor (<i>this</i>) by those of <i>obj</i>. </p>
         *
         * <p> This member function calls the non-member function {@link IContainer.swap swap} (unqualified) to swap
         * the {@link container_ underlying containers}. </p>
         *
         * @param obj Another {@link Stack} container adaptor of the same type (i.e., instantiated with the same
         *			  template parameter, <b>T</b>). Sizes may differ. </p>
         */
        swap(obj) {
            this.container_.swap(obj.container_);
        }
    }
    std.Stack = Stack;
})(std || (std = {}));
/// <reference path="API.ts" />
/// <reference path="base/UniqueSet.ts" />
var std;
(function (std) {
    /**
     * <p> Tree-structured set, <code>std::set</code> of STL. </p>
     *
     * <p> {@link TreeSet}s are containers that store unique elements following a specific order. </p>
     *
     * <p> In a {@link TreeSet}, the value of an element also identifies it (the value is itself the
     * <i>key</i>, of type <i>T</i>), and each value must be unique. The value of the elements in a
     * {@link TreeSet} cannot be modified once in the container (the elements are always const), but they
     * can be inserted or removed from the container. </p>
     *
     * <p> Internally, the elements in a {@link TreeSet} are always sorted following a specific strict weak
     * ordering criterion indicated by its internal comparison method (of {@link less}). </p>
     *
     * <p> {@link TreeSet} containers are generally slower than {@link HashSet} containers to access
     * individual elements by their <i>key</i>, but they allow the direct iteration on subsets based on their
     * order. </p>
     *
     * <p> {@link TreeSet}s are typically implemented as binary search trees. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/set_containers.png" style="max-width: 100%" /> </a></p>
     *
     * <h3> Container properties </h3>
     * <dl>
     *	<dt> Associative </dt>
     *	<dd>
     *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		position in the container.
     *	</dd>
     *
     *	<dt> Ordered </dt>
     *	<dd>
     *		The elements in the container follow a strict order at all times. All inserted elements are
     *		given a position in this order.
     *	</dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     *
     *	<dt> Unique keys </dt>
     *	<dd> No two elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <T> Type of the elements.
     *			  Each element in an {@link TreeSet} is also uniquely identified by this value.
     *
     * @reference http://www.cplusplus.com/reference/set/set
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeSet extends std.base.UniqueSet {
        constructor(...args) {
            // INIT MEMBERS
            super();
            this.tree_ = new std.base.AtomicTree(this);
            if (args.length >= 1 && args[0] instanceof TreeSet) {
                // COPY CONSTRUCTOR
                let container = args[0]; // PARAMETER
                if (args.length == 2)
                    this.tree_["compare_"] = (args[1]);
                this.assign(container.begin(), container.end());
            }
            else if (args.length >= 1 && args[0] instanceof Array) {
                // INITIALIZER LIST CONSTRUCTOR
                let items = args[0]; // PARAMETER
                if (args.length == 2)
                    this.tree_["compare_"] = (args[1]);
                this.push(...items);
            }
            else if (args.length >= 2 && args[0] instanceof std.Iterator && args[1] instanceof std.Iterator) {
                // RANGE CONSTRUCTOR
                let first = args[0]; // PARAMETER 1
                let last = args[1]; // PARAMETER 2
                if (args.length == 2)
                    this.tree_["compare_"] = (args[2]);
                this.assign(first, last);
            }
            else if (args.length == 1) {
                // DEFAULT CONSTRUCTOR WITH SPECIFIED COMPARISON FUNCTION
                this.tree_["compare_"] = (args[0]);
            }
        }
        /* ---------------------------------------------------------
            ASSIGN & CLEAR
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        clear() {
            super.clear();
            this.tree_.clear();
        }
        /* =========================================================
            ACCESSORS
        ========================================================= */
        /**
         * @inheritdoc
         */
        find(val) {
            let node = this.tree_.find(val);
            if (node == null || std.equal_to(node.value.value, val) == false)
                return this.end();
            else
                return node.value;
        }
        /**
         * @inheritdoc
         */
        key_comp() {
            return this.tree_.key_comp();
        }
        /**
         * @inheritdoc
         */
        value_comp() {
            return this.tree_.key_comp();
        }
        /**
         * @inheritdoc
         */
        lower_bound(val) {
            return this.tree_.lower_bound(val);
        }
        /**
         * @inheritdoc
         */
        upper_bound(val) {
            return this.tree_.upper_bound(val);
        }
        /**
         * @inheritdoc
         */
        equal_range(val) {
            return this.tree_.equal_range(val);
        }
        /* =========================================================
            ELEMENTS I/O
                - INSERT
                - POST-PROCESS
                - SWAP
        ============================================================
            INSERT
        --------------------------------------------------------- */
        /**
         * @hidden
         */
        _Insert_by_val(val) {
            let node = this.tree_.find(val);
            // IF EQUALS, THEN RETURN FALSE
            if (node != null && std.equal_to(node.value.value, val) == true)
                return std.make_pair(node.value, false);
            // FIND NODE
            let it;
            if (node == null)
                it = this.end();
            else if (this.key_comp()(node.value.value, val) == true)
                it = node.value.next();
            else
                it = node.value;
            /////
            // INSERTS
            /////
            it = this["data_"].insert(it, val);
            this._Handle_insert(it, it.next()); // POST-PROCESS
            return std.make_pair(it, true);
        }
        _Insert_by_hint(hint, val) {
            // FIND KEY
            if (this.has(val) == true)
                return this.end();
            // VALIDATE HINT
            let ret;
            let compare = this.tree_.key_comp();
            // hint < current && current < next
            if (compare(hint.value, val) == true
                && (hint.next().equal_to(this.end()) || compare(val, hint.next().value) == true)) {
                ///////
                // RIGHT HINT
                ///////
                // INSERT
                ret = this["data_"].insert(hint, val);
                // POST-PROCESS
                this._Handle_insert(ret, ret.next());
            }
            else {
                ///////
                // WRONG HINT
                ///////
                // INSERT BY AUTOMATIC NODE FINDING
                ret = this._Insert_by_val(val).first;
            }
            return ret;
        }
        /**
         * @hidden
         */
        _Insert_by_range(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this._Insert_by_val(first.value);
        }
        /* ---------------------------------------------------------
            POST-PROCESS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        _Handle_insert(first, last) {
            this.tree_.insert(first);
        }
        /**
         * @inheritdoc
         */
        _Handle_erase(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this.tree_.erase(last);
        }
        swap(obj) {
            if (obj instanceof TreeSet && this.key_comp() == obj.key_comp()) {
                this._Swap(obj);
                [this.tree_, obj.tree_] = [obj.tree_, this.tree_];
            }
            else
                super.swap(obj);
        }
    }
    std.TreeSet = TreeSet;
})(std || (std = {}));
/// <reference path="API.ts" />
/// <reference path="base/UniqueMap.ts" />
var std;
(function (std) {
    /**
     * <p> Tree-structured map, <code>std::map</code> of STL. </p>
     *
     * <p> {@link TreeMap TreeMaps} are associative containers that store elements formed by a combination of a
     * <i>key value</i> (<i>Key</i>) and a <i>mapped value</i> (<i>T</i>), following order. </p>
     *
     * <p> In a {@link TreeMap}, the <i>key values</i> are generally used to sort and uniquely identify the elements,
     * while the <i>mapped values</i> store the content associated to this key. The types of <i>key</i> and
     * <i>mapped value</i> may differ, and are grouped together in member type <i>value_type</i>, which is a {@link Pair}
     * type combining both: </p>
     *
     * <p> <code>typedef Pair<Key, T> value_type;</code> </p>
     *
     * <p> Internally, the elements in a {@link TreeMap} are always sorted by its <i>key</i> following a
     * <i>strict weak ordering</i> criterion indicated by its internal comparison method {@link less}.
     *
     * <p> {@link TreeMap} containers are generally slower than {@link HashMap HashMap} containers to access individual
     * elements by their <i>key</i>, but they allow the direct iteration on subsets based on their order. </p>
     *
     * <p> {@link TreeMap}s are typically implemented as binary search trees. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/map_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/map_containers.png" style="max-width: 100%" /> </a></p>
     *
     * <h3> Container properties </h3>
     * <dl>
     *	<dt> Associative </dt>
     *	<dd> Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		 position in the container. </dd>
     *
     *	<dt> Ordered </dt>
     *	<dd> The elements in the container follow a strict order at all times. All inserted elements are
     *		 given a position in this order. </dd>
     *
     *	<dt> Map </dt>
     *	<dd> Each element associates a <i>key</i> to a <i>mapped value</i>:
     *		 <i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>. </dd>
     *
     *	<dt> Unique keys </dt>
     *	<dd> No two elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <Key> Type of the keys. Each element in a map is uniquely identified by its key value.
     * @param <T> Type of the mapped value. Each element in a map stores some data as its mapped value.
     *
     * @reference http://www.cplusplus.com/reference/map/map
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMap extends std.base.UniqueMap {
        constructor(...args) {
            // INIT MEMBERS
            super();
            this.tree_ = new std.base.PairTree(this);
            if (args.length >= 1 && args[0] instanceof TreeMap) {
                // COPY CONSTRUCTOR
                let container = args[0]; // PARAMETER
                if (args.length == 2)
                    this.tree_["compare_"] = (args[1]);
                this.assign(container.begin(), container.end());
            }
            else if (args.length >= 1 && args[0] instanceof Array) {
                // INITIALIZER LIST CONSTRUCTOR
                let items = args[0]; // PARAMETER
                if (args.length == 2)
                    this.tree_["compare_"] = (args[1]);
                this.push(...items);
            }
            else if (args.length >= 2 && args[0] instanceof std.Iterator && args[1] instanceof std.Iterator) {
                // RANGE CONSTRUCTOR
                let first = args[0]; // PARAMETER 1
                let last = args[1]; // PARAMETER 2
                if (args.length == 2)
                    this.tree_["compare_"] = (args[2]);
                this.assign(first, last);
            }
            else if (args.length == 1) {
                // DEFAULT CONSTRUCTOR WITH SPECIFIED COMPARISON FUNCTION
                this.tree_["compare_"] = (args[0]);
            }
        }
        /* ---------------------------------------------------------
            ASSIGN & CLEAR
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        clear() {
            super.clear();
            this.tree_.clear();
        }
        /* =========================================================
            ACCESSORS
        ========================================================= */
        /**
         * @inheritdoc
         */
        find(key) {
            let node = this.tree_.find(key);
            if (node == null || std.equal_to(node.value.first, key) == false)
                return this.end();
            else
                return node.value;
        }
        /**
         * @inheritdoc
         */
        key_comp() {
            return this.tree_.key_comp();
        }
        /**
         * @inheritdoc
         */
        value_comp() {
            return this.tree_.value_comp();
        }
        /**
         * @inheritdoc
         */
        lower_bound(key) {
            return this.tree_.lower_bound(key);
        }
        /**
         * @inheritdoc
         */
        upper_bound(key) {
            return this.tree_.upper_bound(key);
        }
        /**
         * @inheritdoc
         */
        equal_range(key) {
            return this.tree_.equal_range(key);
        }
        /* =========================================================
            ELEMENTS I/O
                - INSERT
                - POST-PROCESS
                - SWAP
        ============================================================
            INSERT
        --------------------------------------------------------- */
        /**
         * @hidden
         */
        _Insert_by_pair(pair) {
            let node = this.tree_.find(pair.first);
            // IF EQUALS, THEN RETURN FALSE
            if (node != null && std.equal_to(node.value.first, pair.first) == true)
                return std.make_pair(node.value, false);
            // INSERTS
            let it;
            if (node == null)
                it = this.end();
            else if (this.key_comp()(node.value.first, pair.first) == true)
                it = node.value.next();
            else
                it = node.value;
            // ITERATOR TO RETURN
            it = this["data_"].insert(it, pair);
            this._Handle_insert(it, it.next()); // POST-PROCESS
            return std.make_pair(it, true);
        }
        /**
         * @hidden
         */
        _Insert_by_hint(hint, pair) {
            // FIND KEY
            if (this.has(pair.first) == true)
                return this.end();
            // VALIDATE HINT
            let ret;
            let compare = this.key_comp();
            // hint < current && current < next
            if (compare(hint.first, pair.first) == true
                && (hint.next().equal_to(this.end()) || compare(pair.first, hint.next().first) == true)) {
                ///////
                // RIGHT HINT
                ///////
                // INSERT
                ret = this["data_"].insert(hint, pair);
                // POST-PROCESS
                this._Handle_insert(ret, ret.next());
            }
            else {
                ///////
                // WRONG HINT
                ///////
                // INSERT BY AUTOMATIC NODE FINDING
                ret = this._Insert_by_pair(pair).first;
            }
            return ret;
        }
        /**
         * @hidden
         */
        _Insert_by_range(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this._Insert_by_pair(std.make_pair(first.value.first, first.value.second));
        }
        /* ---------------------------------------------------------
            POST-PROCESS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        _Handle_insert(first, last) {
            this.tree_.insert(first);
        }
        /**
         * @inheritdoc
         */
        _Handle_erase(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this.tree_.erase(last);
        }
        /**
         * @inheritdoc
         */
        swap(obj) {
            if (obj instanceof TreeMap && this.key_comp() == obj.key_comp()) {
                this._Swap(obj);
                [this.tree_, obj.tree_] = [obj.tree_, this.tree_];
            }
            else
                super.swap(obj);
        }
    }
    std.TreeMap = TreeMap;
})(std || (std = {}));
/// <reference path="API.ts" />
/// <reference path="base/MultiSet.ts" />
var std;
(function (std) {
    /**
     * <p> Tree-structured multiple-key set. </p>
     *
     * <p> {@link TreeMultiSet TreeMultiSets} are containers that store elements following a specific order, and
     * where multiple elements can have equivalent values. </p>
     *
     * <p> In a {@link TreeMultiSet}, the value of an element also identifies it (the value is itself
     * the <i>key</i>, of type <i>T</i>). The value of the elements in a {@link TreeMultiSet} cannot
     * be modified once in the container (the elements are always const), but they can be inserted or removed
     * from the container. </p>
     *
     * <p> Internally, the elements in a {@link TreeMultiSet TreeMultiSets} are always sorted following a strict
     * weak ordering criterion indicated by its internal comparison method (of {@link IComparable.less less}). </p>
     *
     * <p> {@link TreeMultiSet} containers are generally slower than {@link HashMultiSet} containers
     * to access individual elements by their <i>key</i>, but they allow the direct iteration on subsets based on
     * their order. </p>
     *
     * <p> {@link TreeMultiSet TreeMultiSets} are typically implemented as binary search trees. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/set_containers.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/set_containers.png" style="max-width: 100%" /> </a></p>
     *
     * <h3> Container properties </h3>
     * <dl>
     *	<dt> Associative </dt>
     *	<dd>
     *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		position in the container.
     *	</dd>
     *
     *	<dt> Ordered </dt>
     *	<dd>
     *		The elements in the container follow a strict order at all times. All inserted elements are
     *		given a position in this order.
     *	</dd>
     *
     *	<dt> Set </dt>
     *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
     *
     *	<dt> Multiple equivalent keys </dt>
     *	<dd> Multiple elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <T> Type of the elements. Each element in a {@link TreeMultiSet} container is also identified
     *			  by this value (each value is itself also the element's <i>key</i>).
     *
     * @reference http://www.cplusplus.com/reference/set/multiset
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMultiSet extends std.base.MultiSet {
        constructor(...args) {
            // INIT MEMBERS
            super();
            this.tree_ = new std.base.AtomicTree(this);
            if (args.length >= 1 && args[0] instanceof TreeMultiSet) {
                // COPY CONSTRUCTOR
                let container = args[0]; // PARAMETER
                if (args.length == 2)
                    this.tree_["compare_"] = (args[1]);
                this.assign(container.begin(), container.end());
            }
            else if (args.length >= 1 && args[0] instanceof Array) {
                // INITIALIZER LIST CONSTRUCTOR
                let items = args[0]; // PARAMETER
                if (args.length == 2)
                    this.tree_["compare_"] = (args[1]);
                this.push(...items);
            }
            else if (args.length >= 2 && args[0] instanceof std.Iterator && args[1] instanceof std.Iterator) {
                // RANGE CONSTRUCTOR
                let first = args[0]; // PARAMETER 1
                let last = args[1]; // PARAMETER 2
                if (args.length == 2)
                    this.tree_["compare_"] = (args[2]);
                this.assign(first, last);
            }
            else if (args.length == 1) {
                // DEFAULT CONSTRUCTOR WITH SPECIFIED COMPARISON FUNCTION
                this.tree_["compare_"] = (args[0]);
            }
        }
        /* ---------------------------------------------------------
            ASSIGN & CLEAR
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        clear() {
            super.clear();
            this.tree_.clear();
        }
        /* =========================================================
            ACCESSORS
        ========================================================= */
        /**
         * @inheritdoc
         */
        find(val) {
            var node = this.tree_.find(val);
            if (node == null || std.equal_to(val, node.value.value) == false)
                return this.end();
            else
                return node.value;
        }
        /**
         * @inheritdoc
         */
        count(val) {
            let it = this.find(val);
            let cnt = 0;
            for (; !it.equal_to(this.end()) && std.equal_to(it.value, val); it = it.next())
                cnt++;
            return cnt;
        }
        /**
         * @inheritdoc
         */
        key_comp() {
            return this.tree_.key_comp();
        }
        /**
         * @inheritdoc
         */
        value_comp() {
            return this.tree_.key_comp();
        }
        /**
         * @inheritdoc
         */
        lower_bound(val) {
            return this.tree_.lower_bound(val);
        }
        /**
         * @inheritdoc
         */
        upper_bound(val) {
            return this.tree_.upper_bound(val);
        }
        /**
         * @inheritdoc
         */
        equal_range(val) {
            return this.tree_.equal_range(val);
        }
        ///**
        // * @hidden
        // */
        //public _Get_tree(): base.AtomicTree<T>
        //{
        //	return this.tree_;
        //}
        /* =========================================================
            ELEMENTS I/O
                - INSERT
                - POST-PROCESS
                - SWAP
        ============================================================
            INSERT
        --------------------------------------------------------- */
        /**
         * @hidden
         */
        _Insert_by_val(val) {
            var node = this.tree_.find(val);
            var it;
            // FIND NODE
            if (node == null) {
                it = this.end();
            }
            else if (std.equal_to(node.value.value, val) == true) {
                it = node.value.next();
            }
            else if (this.key_comp()(node.value.value, val) == true) {
                it = node.value.next();
                while (it.equal_to(this.end()) == false && this.key_comp()(it.value, val))
                    it = it.next();
            }
            else {
                it = node.value;
            }
            /////
            // INSERTS
            /////
            it = this["data_"].insert(it, val);
            this._Handle_insert(it, it.next()); // POST-PROCESS
            return it;
        }
        /**
         * @hidden
         */
        _Insert_by_hint(hint, val) {
            // VALIDATE HINT
            let ret;
            let compare = this.tree_.key_comp();
            // hint <= current && current <= next
            if ((compare(hint.value, val) || std.equal_to(hint.value, val))
                && (hint.next().equal_to(this.end()) || (compare(val, hint.next().value) || std.equal_to(val, hint.next().value)))) {
                ///////
                // RIGHT HINT
                ///////
                // INSERT
                ret = this["data_"].insert(hint, val);
                // POST-PROCESS
                this._Handle_insert(ret, ret.next());
            }
            else {
                ///////
                // WRONG HINT
                ///////
                // INSERT BY AUTOMATIC NODE FINDING
                ret = this._Insert_by_val(val);
            }
            return ret;
        }
        /**
         * @hidden
         */
        _Insert_by_range(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this._Insert_by_val(first.value);
        }
        /* ---------------------------------------------------------
            POST-PROCESS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        _Handle_insert(first, last) {
            this.tree_.insert(first);
        }
        /**
         * @inheritdoc
         */
        _Handle_erase(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this.tree_.erase(last);
        }
        swap(obj) {
            if (obj instanceof TreeMultiSet && this.key_comp() == obj.key_comp()) {
                this._Swap(obj);
                [this.tree_, obj.tree_] = [obj.tree_, this.tree_];
            }
            else
                super.swap(obj);
        }
    }
    std.TreeMultiSet = TreeMultiSet;
})(std || (std = {}));
/// <reference path="API.ts" />
/// <reference path="base/MultiMap.ts" />
var std;
(function (std) {
    /**
     * <p> Tree-structured multiple-key map. </p>
     *
     * <p> {@link TreeMultiMap TreeMultiMaps} are associative containers that store elements formed by a combination of
     * a <i>key value</i> and a <i>mapped value</i>, following a specific order, and where multiple elements can
     * have equivalent keys. </p>
     *
     * <p> In a {@link TreeMultiMap}, the <i>key values</i> are generally used to sort and uniquely identify
     * the elements, while the <i>mapped values</i> store the content associated to this <i>key</i>. The types of
     * <i>key</i> and <i>mapped value</i> may differ, and are grouped together in member type
     * <code>value_type</code>, which is a {@link Pair} type combining both: </p>
     *
     * <p> <code>typedef Pair<const Key, T> value_type;</code> </p>
     *
     * <p> Internally, the elements in a {@link TreeMultiMap}are always sorted by its key following a
     * strict weak ordering criterion indicated by its internal comparison method (of {@link less}). </p>
     *
     * <p> {@link TreeMultiMap}containers are generally slower than {@link HashMap} containers
     * to access individual elements by their <i>key</i>, but they allow the direct iteration on subsets based
     * on their order. </p>
     *
     * <p> {@link TreeMultiMap TreeMultiMaps} are typically implemented as binary search trees. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/map_containers.png" target="_blank"> <
     * img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/map_containers.png" style="max-width: 100%" /> </a></p>
     *
     * <h3> Container properties </h3>
     * <dl>
     *	<dt> Associative </dt>
     *	<dd>
     *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute
     *		position in the container.
     *	</dd>
     *
     *	<dt> Ordered </dt>
     *	<dd>
     *		The elements in the container follow a strict order at all times. All inserted elements are
     *		given a position in this order.
     *	</dd>
     *
     *	<dt> Map </dt>
     *	<dd>
     *		Each element associates a <i>key</i> to a <i>mapped value</i>:
     *		<i>Keys</i> are meant to identify the elements whose main content is the <i>mapped value</i>.
     *	</dd>
     *
     *	<dt> Multiple equivalent keys </dt>
     *	<dd> Multiple elements in the container can have equivalent <i>keys</i>. </dd>
     * </dl>
     *
     * @param <Key> Type of the keys. Each element in a map is uniquely identified by its key value.
     * @param <T> Type of the mapped value. Each element in a map stores some data as its mapped value.
     *
     * @reference http://www.cplusplus.com/reference/map/multimap
     * @author Jeongho Nam <http://samchon.org>
     */
    class TreeMultiMap extends std.base.MultiMap {
        constructor(...args) {
            // INIT MEMBERS
            super();
            this.tree_ = new std.base.PairTree(this);
            if (args.length >= 1 && args[0] instanceof TreeMultiMap) {
                // COPY CONSTRUCTOR
                let container = args[0]; // PARAMETER
                if (args.length == 2)
                    this.tree_["compare_"] = (args[1]);
                this.assign(container.begin(), container.end());
            }
            else if (args.length >= 1 && args[0] instanceof Array) {
                // INITIALIZER LIST CONSTRUCTOR
                let items = args[0]; // PARAMETER
                if (args.length == 2)
                    this.tree_["compare_"] = (args[1]);
                this.push(...items);
            }
            else if (args.length >= 2 && args[0] instanceof std.Iterator && args[1] instanceof std.Iterator) {
                // RANGE CONSTRUCTOR
                let first = args[0]; // PARAMETER 1
                let last = args[1]; // PARAMETER 2
                if (args.length == 2)
                    this.tree_["compare_"] = (args[2]);
                this.assign(first, last);
            }
            else if (args.length == 1) {
                // DEFAULT CONSTRUCTOR WITH SPECIFIED COMPARISON FUNCTION
                this.tree_["compare_"] = (args[0]);
            }
        }
        /* ---------------------------------------------------------
            ASSIGN & CLEAR
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        clear() {
            super.clear();
            this.tree_.clear();
        }
        /* =========================================================
            ACCESSORS
        ========================================================= */
        /**
         * @inheritdoc
         */
        find(key) {
            let node = this.tree_.find(key);
            if (node == null || std.equal_to(node.value.first, key) == false)
                return this.end();
            else
                return node.value;
        }
        /**
         * @inheritdoc
         */
        count(key) {
            let it = this.find(key);
            let cnt = 0;
            for (; !it.equal_to(this.end()) && std.equal_to(it.first, key); it = it.next())
                cnt++;
            return cnt;
        }
        /**
         * @inheritdoc
         */
        key_comp() {
            return this.tree_.key_comp();
        }
        /**
         * @inheritdoc
         */
        value_comp() {
            return this.tree_.value_comp();
        }
        /**
         * @inheritdoc
         */
        lower_bound(key) {
            return this.tree_.lower_bound(key);
        }
        /**
         * @inheritdoc
         */
        upper_bound(key) {
            return this.tree_.upper_bound(key);
        }
        /**
         * @inheritdoc
         */
        equal_range(key) {
            return this.tree_.equal_range(key);
        }
        /* =========================================================
            ELEMENTS I/O
                - INSERT
                - POST-PROCESS
                - SWAP
        ============================================================
            INSERT
        --------------------------------------------------------- */
        /**
         * @hidden
         */
        _Insert_by_pair(pair) {
            let node = this.tree_.find(pair.first);
            let it;
            if (node == null) {
                it = this.end();
            }
            else if (std.equal_to(node.value.first, pair.first) == true) {
                it = node.value.next();
            }
            else if (this.key_comp()(node.value.first, pair.first) == true) {
                it = node.value.next();
                while (it.equal_to(this.end()) == false && this.key_comp()(it.first, pair.first))
                    it = it.next();
            }
            else
                it = node.value;
            // ITERATOR TO RETURN
            it = this["data_"].insert(it, pair);
            this._Handle_insert(it, it.next()); // POST-PROCESS
            return it;
        }
        /**
         * @hidden
         */
        _Insert_by_hint(hint, pair) {
            // FIND KEY
            if (this.has(pair.first) == true)
                return this.end();
            // VALIDATE HINT
            let ret;
            let compare = this.key_comp();
            // hint <= current && current <= next
            if ((compare(hint.first, pair.first) || std.equal_to(hint.first, pair.first))
                && (hint.next().equal_to(this.end()) || (compare(pair.first, hint.next().first) || std.equal_to(pair.first, hint.next().first)))) {
                ///////
                // RIGHT HINT
                ///////
                // INSERT
                ret = this["data_"].insert(hint, pair);
                // POST-PROCESS
                this._Handle_insert(ret, ret.next());
            }
            else {
                ///////
                // WRONG HINT
                ///////
                // INSERT BY AUTOMATIC NODE FINDING
                ret = this._Insert_by_pair(pair);
            }
            return ret;
        }
        /**
         * @hidden
         */
        _Insert_by_range(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this._Insert_by_pair(std.make_pair(first.value.first, first.value.second));
        }
        /* ---------------------------------------------------------
            POST-PROCESS
        --------------------------------------------------------- */
        /**
         * @inheritdoc
         */
        _Handle_insert(first, last) {
            this.tree_.insert(first);
        }
        /**
         * @inheritdoc
         */
        _Handle_erase(first, last) {
            for (; !first.equal_to(last); first = first.next())
                this.tree_.erase(last);
        }
        /**
         * @inheritdoc
         */
        swap(obj) {
            if (obj instanceof TreeMultiMap && this.key_comp() == obj.key_comp()) {
                this._Swap(obj);
                [this.tree_, obj.tree_] = [obj.tree_, this.tree_];
            }
            else
                super.swap(obj);
        }
    }
    std.TreeMultiMap = TreeMultiMap;
})(std || (std = {}));
/// <reference path="API.ts" />
/// <reference path="Exception.ts" />
/// <reference path="base/ErrorInstance.ts" />
var std;
(function (std) {
    /**
     * <p> System error exception. </p>
     *
     * <p> This class defines the type of objects thrown as exceptions to report conditions originating during
     * runtime from the operating system or other low-level application program interfaces which have an
     * associated {@link ErrorCode}. </p>
     *
     * <p> The class inherits from {@link RuntimeError}, to which it adds an {@link ErrorCode} as
     * member code (and defines a specialized what member). </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
     *
     * @reference http://www.cplusplus.com/reference/system_error/system_error
     * @author Jeongho Nam <http://samchon.org>
     */
    class SystemError extends std.RuntimeError {
        constructor(...args) {
            super("");
        }
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * <p> Get error code. </p>
         *
         * <p> Returns the {@link ErrorCode} object associated with the exception. </p>
         *
         * <p> This value is either the {@link ErrorCode} passed to the construction or its equivalent
         * (if constructed with a value and a {@link category}. </p>
         *
         * @return The {@link ErrorCode} associated with the object.
         */
        code() {
            return this.code_;
        }
    }
    std.SystemError = SystemError;
})(std || (std = {}));
var std;
(function (std) {
    /**
     * <p> Error category. </p>
     *
     * <p> This type serves as a base class for specific category types. </p>
     *
     * <p> Category types are used to identify the source of an error. They also define the relation between
     * {@link ErrorCode} and {@link ErrorCondition}objects of its category, as well as the message set for {@link ErrorCode}
     * objects.
     *
     * <p> Objects of these types have no distinct values and are not-copyable and not-assignable, and thus can only be
     * passed by reference. As such, only one object of each of these types shall exist, each uniquely identifying its own
     * category: all error codes and conditions of a same category shall return a reference to same object. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
     *
     * @reference http://www.cplusplus.com/reference/system_error/error_category
     * @author Jeongho Nam <http://samchon.org>
     */
    class ErrorCategory {
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        /**
         * Default Constructor.
         */
        constructor() {
        }
        /* ---------------------------------------------------------
            OPERATORS
        --------------------------------------------------------- */
        /**
         * <p> Default error condition. </p>
         *
         * <p> Returns the default {@link ErrorCondition}object of this category that is associated with the
         * {@link ErrorCode} identified by a value of <i>val</i>. </p>
         *
         * <p> Its definition in the base class {@link ErrorCategory} returns the same as constructing an
         * {@link ErrorCondition} object with:
         *
         * <p> <code>new ErrorCondition(val, *this);</code> </p>
         *
         * <p> As a virtual member function, this behavior can be overriden in derived classes. </p>
         *
         * <p> This function is called by the default definition of member {@link equivalent equivalent()}, which is used to
         * compare {@link ErrorCondition error conditions} with error codes. </p>
         *
         * @param val A numerical value identifying an error condition.
         *
         * @return The default {@link ErrorCondition}object associated with condition value <i>val</i> for this category.
         */
        default_error_condition(val) {
            return new std.ErrorCondition(val, this);
        }
        equivalent(...args) {
            if (args[1] instanceof std.ErrorCondition) {
                let val_code = args[0];
                let cond = args[1];
                return std.equal_to(this.default_error_condition(val_code), cond);
            }
            else {
                let code = args[0];
                let valcond = args[1];
                return std.equal_to(this, code.category()) && code.value() == valcond;
            }
        }
    }
    std.ErrorCategory = ErrorCategory;
})(std || (std = {}));
var std;
(function (std) {
    /**
     * <p> Error condition. </p>
     *
     * <p> Objects of this type hold a condition {@link value} associated with a {@link category}. </p>
     *
     * <p> Objects of this type describe errors in a generic way so that they may be portable across different
     * systems. This is in contrast with {@link ErrorCode} objects, that may contain system-specific
     * information. </p>
     *
     * <p> Because {@link ErrorCondition}objects can be compared with error_code objects directly by using
     * <code>relational operators</code>, {@link ErrorCondition}objects are generally used to check whether
     * a particular {@link ErrorCode} obtained from the system matches a specific error condition no matter
     * the system. </p>
     *
     * <p> The {@link ErrorCategory categories} associated with the {@link ErrorCondition} and the
     * {@link ErrorCode} define the equivalences between them. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
     *
     * @reference http://www.cplusplus.com/reference/system_error/error_condition
     * @author Jeongho Nam <http://samchon.org>
     */
    class ErrorCondition extends std.base.ErrorInstance {
        constructor(val = 0, category = null) {
            super(val, category);
        }
    }
    std.ErrorCondition = ErrorCondition;
})(std || (std = {}));
var std;
(function (std) {
    /**
     * <p> Error code. </p>
     *
     * <p> Objects of this type hold an error code {@link value} associated with a {@link category}. </p>
     *
     * <p> The operating system and other low-level applications and libraries generate numerical error codes to
     * represent possible results. These numerical values may carry essential information for a specific platform,
     * but be non-portable from one platform to another. </p>
     *
     * <p> Objects of this class associate such numerical codes to {@link ErrorCategory error categories}, so that they
     * can be interpreted when needed as more abstract (and portable) {@link ErrorCondition error conditions}. </p>
     *
     * <p> <a href="http://samchon.github.io/typescript-stl/images/design/class_diagram/exceptions.png" target="_blank">
     * <img src="http://samchon.github.io/typescript-stl/images/design/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
     *
     * @reference http://www.cplusplus.com/reference/system_error/error_code
     * @author Jeongho Nam <http://samchon.org>
     */
    class ErrorCode extends std.base.ErrorInstance {
        constructor(val = 0, category = null) {
            super(val, category);
        }
    }
    std.ErrorCode = ErrorCode;
})(std || (std = {}));
/// <reference path="API.ts" />
var std;
(function (std) {
    /**
     * <p> Running on Node. </p>
     *
     * <p> Test whether the JavaScript is running on Node. </p>
     *
     * @references http://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser
     */
    function is_node() {
        if (typeof process === "object")
            if (typeof process.versions === "object")
                if (typeof process.versions.node !== "undefined")
                    return true;
        return false;
    }
    std.is_node = is_node;
    /**
     * <p> Pair of values. </p>
     *
     * <p> This class couples together a pair of values, which may be of different types (<i>T1</i> and
     * <i>T2</i>). The individual values can be accessed through its public members {@link first} and
     * {@link second}. </p>
     *
     * @param <T1> Type of member {@link first}.
     * @param <T2> Type of member {@link second}.
     *
     * @reference http://www.cplusplus.com/reference/utility/pair
     * @author Jeongho Nam <http://samchon.org>
     */
    class Pair {
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        /**
         * <p> Construct from pair values. </p>
         *
         * @param first The first value of the Pair
         * @param second The second value of the Pair
         */
        constructor(first, second) {
            this.first = first;
            this.second = second;
        }
        /* ---------------------------------------------------------
            COMPARISON
        --------------------------------------------------------- */
        /**
         * <p> Whether a Pair is equal with the Pair. <p>
         * <p> Compare each first and second value of two Pair(s) and returns whether they are equal or not. </p>
         *
         * <p> If stored key and value in a Pair are not number or string but an object like a class or struct,
         * the comparison will be executed by a member method (SomeObject)::equal_to(). If the object does not have
         * the member method equal_to(), only address of pointer will be compared. </p>
         *
         * @param obj A Map to compare
         * @return Indicates whether equal or not.
         */
        equal_to(pair) {
            return std.equal_to(this.first, pair.first) && std.equal_to(this.second, pair.second);
        }
        less(pair) {
            if (std.equal_to(this.first, pair.first) == false)
                return std.less(this.first, pair.first);
            else
                return std.less(this.second, pair.second);
        }
    }
    std.Pair = Pair;
    /**
     * <p> Construct {@link Pair} object. </p>
     *
     * <p> Constructs a {@link Pair} object with its {@link Pair.first first} element set to <i>x</i> and its
     * {@link Pair.second second} element set to <i>y</i>. </p>
     *
     * <p> The template types can be implicitly deduced from the arguments passed to {@link make_pair}. </p>
     *
     * <p> {@link Pair} objects can be constructed from other {@link Pair} objects containing different types, if the
     * respective types are implicitly convertible. </p>
     *
     * @param x Value for member {@link Pair.first first}.
     * @param y Value for member {@link Pair.second second}.
     *
     * @return A {@link Pair} object whose elements {@link Pair.first first} and {@link Pair.second second} are set to
     *		   <i>x</i> and <i>y</i> respectivelly.
     */
    function make_pair(x, y) {
        return new Pair(x, y);
    }
    std.make_pair = make_pair;
})(std || (std = {}));
/// <reference path="../../std/Vector.ts" />
/// <reference path="../../std/Deque.ts" />
/// <reference path="../../std/List.ts" />
/// <reference path="../../std/Queue.ts" />
/// <reference path="../../std/PriorityQueue.ts" />
/// <reference path="../../std/Stack.ts" />
/// <reference path="../../std/HashSet.ts" />
/// <reference path="../../std/HashMap.ts" />
/// <reference path="../../std/HashMultiSet.ts" />
/// <reference path="../../std/HashMultiMap.ts" />
/// <reference path="../../std/TreeSet.ts" />
/// <reference path="../../std/TreeMap.ts" />
/// <reference path="../../std/TreeMultiSet.ts" />
/// <reference path="../../std/TreeMultiMap.ts" />
/// <reference path="../../std/Algorithm.ts" />
/// <reference path="../../std/Exception.ts" />
/// <reference path="../../std/Functional.ts" />
/// <reference path="../../std/Iterator.ts" />
/// <reference path="../../std/SystemError.ts" />
/// <reference path="../../std/Utility.ts" />
var std;
(function (std) {
    /* =========================================================
        CONTAINER SHORTCUTS
            - LINEAR CONTAINERS
            - ASSOCIATIVE CONTAINERS
            - SET CONTAINERS
            - MAP CONTAINERS
            - EXCEPTIONS
    ============================================================
        LINEAR CONTAINERS
    --------------------------------------------------------- */
    /**
     * Type definition of {@link Vector} and it's the original name used in C++.
     */
    std.vector = std.Vector;
    /**
     * Type definition of {@link List} and it's the original name used in C++.
     */
    std.list = std.List;
    /**
     * Type definition of {@link Deque} and it's the original name used in C++.
     */
    std.deque = std.Deque;
    std.stack = std.Stack;
    std.queue = std.Queue;
    std.priority_queue = std.PriorityQueue;
    /* ---------------------------------------------------------
        SET CONTAINERS
    --------------------------------------------------------- */
    /**
     * Type definition of {@link TreeSet} and it's the original name used in C++.
     */
    std.set = std.TreeSet;
    /**
     * Type definition of {@link TreeMultiSet} and it's the original name used in C++.
     */
    std.multiset = std.TreeMultiSet;
    /**
     * Type definition of {@link HashSet} and it's the original name used in C++.
     */
    std.unordered_set = std.HashSet;
    /**
     * Type definition of {@link HashMultiSet} and it's the original name used in C++.
     */
    std.unordered_multiset = std.HashMultiSet;
    /* ---------------------------------------------------------
        MAP CONTAINERS
    --------------------------------------------------------- */
    /**
     * Type definition of {@link TreeMap} and it's the original name used in C++.
     */
    std.map = std.TreeMap;
    /**
     * Type definition of {@link TreeMultiMap} and it's the original name used in C++.
     */
    std.multimap = std.TreeMultiMap;
    /**
     * Type definition of {@link HashMap} and it's the original name used in C++.
     */
    std.unordered_map = std.HashMap;
    /**
     * Type definition of {@link HashMultiMap} and it's the original name used in C++.
     */
    std.unordered_multimap = std.HashMultiMap;
    std.exception = std.Exception;
    std.logic_error = std.LogicError;
    std.domain_error = std.DomainError;
    std.invalid_argument = std.InvalidArgument;
    std.length_error = std.LengthError;
    std.out_of_range = std.OutOfRange;
    std.runtime_error = std.RuntimeError;
    std.overflow_error = std.OverflowError;
    std.underflow_error = std.UnderflowError;
    std.range_error = std.RangeError;
    std.system_error = std.SystemError;
    std.error_category = std.ErrorCategory;
    std.error_condition = std.ErrorCondition;
    std.error_code = std.ErrorCode;
})(std || (std = {}));
try {
    module.exports = std;
}
catch (exception) { }
//# sourceMappingURL=typescript-stl.js.map