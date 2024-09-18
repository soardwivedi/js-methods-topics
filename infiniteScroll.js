"use client"
import { useState, useEffect, useRef } from 'react';

const useInfiniteScroll = (fetchMoreItems, hasMore) => {
	const elementRef = useRef(null);

	const onIntersection = (entries) => {
		const firstEntry = entries[0];
		if (firstEntry.isIntersecting && hasMore) {
			fetchMoreItems();
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(onIntersection, {
			root: null,
			rootMargin: '-40px',
			threshold: 1.0,
		});

		if (observer && elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			if (elementRef.current) {
				observer.disconnect();
			}
		};
	}, [fetchMoreItems, hasMore]);

	return elementRef;
};

export default useInfiniteScroll;