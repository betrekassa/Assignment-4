	DO $$	

	--Create a variable 
	DECLARE existsflag BOOL := false;
	BEGIN
		-- Check if table exist 
		existsflag :=  EXISTS (	SELECT 1 
					FROM pg_tables
					WHERE tablename ='tbl_person'
				      ); 
		-- If the table doesn't exist 
		IF existsflag = false THEN 
			CREATE TABLE "tbl_person"
			(
				pk_person_id int,
				first_name varchar,
				last_name varchar,
				gender varchar,
				date_of_birth date
			);
			RAISE NOTICE 'The table person is succesfully created!';
		-- If the table exist the person
		ELSE
			RAISE NOTICE 'The table person already Exists';
		END IF;
		
	
	END $$;