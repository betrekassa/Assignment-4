
-- Drop Database if exists
DROP DATABASE IF EXISTS traffic_violation;

-- Create Database
CREATE DATABASE traffic_violation;

DO $$
DECLARE
	--variable to flag database existance
	existsflag BOOL := false;

BEGIN
	RAISE NOTICE '---------------Welcome PostgreSql---------------';
	RAISE NOTICE 'The first step of this Assignment is to create the database.';


 	existsflag :=  EXISTS (	select 1 
			   	from pg_database
				where datname='traffic_violation'
				-- If the database already exists returns 1
		   	); 

	IF existsflag = true then 
		RAISE NOTICE 'The database is created sucessfully!';
	ELSE
		RAISE NOTICE 'Please check Database is not created!';
	END IF;
	
END $$;
