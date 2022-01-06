CREATE TABLE events (
	event_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	course varchar(10) not null,
	stroke varchar(10) not null,
	distance int not null	
);

CREATE TABLE age_groups (
	age_group_id int not null primary key auto_increment,
	age_group_desc varchar(20)
);

CREATE TABLE standards_dim (
	standard_dim_id int not null primary key auto_increment,
	standard_id int not null,
 	event_id int not null,
	age_group_id int not null,
	gender varchar(10) not null,
	standard varchar(10) not null,
	time_standard time(2) not null,
	create_date datetime not null default now(),
	expir_date datetime not null default '9999-12-31'
);

CREATE TABLE meets (
	meet_id int not null primary key auto_increment,
	meet_name varchar(128) not null,
	meet_desc varchar(256),
	course varchar(10) not null,
	start_date date not null
);

DROP TABLE meet_results;
CREATE TABLE meet_results (
	result_id int not null primary key auto_increment,
	meet_id int not null,
	swimmer_id int not null,
	event_id int not null,
	event_no int,
	heat_no int,
	lane_no int,
	finals bool,
	meet_time time(2)	
);

CREATE TABLE swimmer (
	swimmer_id int not null primary key auto_increment,
	first_name varchar(64) not null,
	last_name varchar(64) not null,
	dob date not null,
	team varchar(48)
)
