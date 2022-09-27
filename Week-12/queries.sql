-- Find the item that has minimum weight

SELECT *
FROM items
WHERE weight IN 
			(SELECT MIN(weight) FROM items);			


-- Find the different warehouses in “Pune"

SELECT * 
FROM warehouses
WHERE location = 'Pune';

-- Find the details of items ordered by a customer “Mr Patil”

SELECT o.ono, c.cname, i.item_name, o.ordered_quantity, o.odate
FROM customer c
JOIN orders o USING (cno)
JOIN items i USING (item_no) 
WHERE c.cname = 'Mr Patil';

-- Find a Warehouse which has maximum stores

SELECT MAX(y.store_count) AS num_stores, y.warehouse, y.wname
FROM (SELECT COUNT(s.store_name) store_count, s.warehouse, w.wname
	FROM stores s
	JOIN warehouses w ON s.warehouse = w.wID
	GROUP BY s.warehouse) y;


-- Find an item which is ordered for a minimum number of times.

SELECT item_name , MIN(q.order_qty) AS min_order
FROM (SELECT SUM(ordered_quantity) order_qty, o.item_no, i.item_name
	FROM orders o
	JOIN items i USING(item_no)
	GROUP BY o.item_no
    ORDER BY order_qty) q;

-- Find the detailed orders given by each customer

SELECT c.cno, c.cname, i.item_name, o.ordered_quantity, o.odate
FROM customer c 
JOIN orders o USING (cno)
JOIN items i USING (item_no)
