SELECT b1.id, b1.right_top_x, b1.right_top_y, b1.lien_api,
       (SELECT b2.lien_api 
        FROM batiments b2 
        WHERE (b1.right_top_x != b2.right_top_x OR b1.right_top_y != b2.right_top_y) 
              AND ST_Distance(ST_MakePoint(b1.right_top_x, b1.right_top_y), ST_MakePoint(b2.right_top_x, b2.right_top_y)) = 
                  (SELECT MIN(ST_Distance(ST_MakePoint(b1.right_top_x, b1.right_top_y), ST_MakePoint(b3.right_top_x, b3.right_top_y))) 
                   FROM batiments b3 
                   WHERE (b1.right_top_x != b3.right_top_x OR b1.right_top_y != b3.right_top_y))
       ) AS closest_building_api
FROM batiments b1;