--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: favorites; Type: TABLE; Schema: public; Owner: tanyapina
--

CREATE TABLE public.favorites (
    id integer NOT NULL,
    userid integer,
    pokecode integer
);


ALTER TABLE public.favorites OWNER TO tanyapina;

--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: tanyapina
--

CREATE SEQUENCE public.favorites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favorites_id_seq OWNER TO tanyapina;

--
-- Name: favorites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tanyapina
--

ALTER SEQUENCE public.favorites_id_seq OWNED BY public.favorites.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: tanyapina
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(20),
    email character varying(320)
);


ALTER TABLE public.users OWNER TO tanyapina;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: tanyapina
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO tanyapina;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tanyapina
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: favorites id; Type: DEFAULT; Schema: public; Owner: tanyapina
--

ALTER TABLE ONLY public.favorites ALTER COLUMN id SET DEFAULT nextval('public.favorites_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: tanyapina
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: tanyapina
--

INSERT INTO public.favorites (id, userid, pokecode) VALUES (1, 1, 2);
INSERT INTO public.favorites (id, userid, pokecode) VALUES (2, 1, 4);
INSERT INTO public.favorites (id, userid, pokecode) VALUES (3, 2, 25);
INSERT INTO public.favorites (id, userid, pokecode) VALUES (6, 1, 11);
INSERT INTO public.favorites (id, userid, pokecode) VALUES (7, 1, 14);
INSERT INTO public.favorites (id, userid, pokecode) VALUES (8, 1, 7);
INSERT INTO public.favorites (id, userid, pokecode) VALUES (9, 1, 13);
INSERT INTO public.favorites (id, userid, pokecode) VALUES (10, 1, 9);
INSERT INTO public.favorites (id, userid, pokecode) VALUES (11, 2, 118);
INSERT INTO public.favorites (id, userid, pokecode) VALUES (12, 1, 122);
INSERT INTO public.favorites (id, userid, pokecode) VALUES (13, 1, 116);
INSERT INTO public.favorites (id, userid, pokecode) VALUES (14, 1, 94);
INSERT INTO public.favorites (id, userid, pokecode) VALUES (15, 1, 51);
INSERT INTO public.favorites (id, userid, pokecode) VALUES (16, 1, 139);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tanyapina
--

INSERT INTO public.users (id, username, email) VALUES (1, 'Tanya Piña', 'tanyapina15@gmail.com');
INSERT INTO public.users (id, username, email) VALUES (2, 'Ash Ketchum', 'ashkpikachu97@gmail.com');


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tanyapina
--

SELECT pg_catalog.setval('public.favorites_id_seq', 16, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tanyapina
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: tanyapina
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tanyapina
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: favorites FK_USERS_FAVORITES; Type: FK CONSTRAINT; Schema: public; Owner: tanyapina
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT "FK_USERS_FAVORITES" FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

