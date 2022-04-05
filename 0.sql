--
-- TOC entry 208 (class 1259 OID 16453)
-- Name: certificate; Type: TABLE; Schema: public; Owner: tdeadmin
--

CREATE TABLE public.certificate (
    id uuid NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    files uuid,
    images uuid
);


ALTER TABLE public.certificate OWNER TO tdeadmin;

--
-- TOC entry 207 (class 1259 OID 16445)
-- Name: contact; Type: TABLE; Schema: public; Owner: tdeadmin
--

CREATE TABLE public.contact (
    id uuid NOT NULL,
    title text NOT NULL,
    address text,
    email text,
    phone text,
    fax text,
    work_time interval,
    timezone time with time zone
);


ALTER TABLE public.contact OWNER TO tdeadmin;

--
-- TOC entry 202 (class 1259 OID 16410)
-- Name: file; Type: TABLE; Schema: public; Owner: tdeadmin
--

CREATE TABLE public.file (
    id uuid NOT NULL,
    path text NOT NULL
);


ALTER TABLE public.file OWNER TO tdeadmin;

--
-- TOC entry 201 (class 1259 OID 16402)
-- Name: image; Type: TABLE; Schema: public; Owner: tdeadmin
--

CREATE TABLE public.image (
    id uuid NOT NULL,
    path text NOT NULL
);


ALTER TABLE public.image OWNER TO tdeadmin;

--
-- TOC entry 203 (class 1259 OID 16418)
-- Name: linked_files; Type: TABLE; Schema: public; Owner: tdeadmin
--

CREATE TABLE public.linked_files (
    object_id uuid NOT NULL,
    file_id uuid NOT NULL
);


ALTER TABLE public.linked_files OWNER TO tdeadmin;

--
-- TOC entry 200 (class 1259 OID 16399)
-- Name: linked_images; Type: TABLE; Schema: public; Owner: tdeadmin
--

CREATE TABLE public.linked_images (
    object_id uuid NOT NULL,
    image_id uuid NOT NULL
);


ALTER TABLE public.linked_images OWNER TO tdeadmin;

--
-- TOC entry 205 (class 1259 OID 16429)
-- Name: news; Type: TABLE; Schema: public; Owner: tdeadmin
--

CREATE TABLE public.news (
    id uuid NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    date date NOT NULL,
    images uuid,
    files uuid
);


ALTER TABLE public.news OWNER TO tdeadmin;

--
-- TOC entry 206 (class 1259 OID 16437)
-- Name: product; Type: TABLE; Schema: public; Owner: tdeadmin
--

CREATE TABLE public.product (
    id uuid NOT NULL,
    title text NOT NULL,
    content text NOT NULL
);


ALTER TABLE public.product OWNER TO tdeadmin;

--
-- TOC entry 211 (class 1259 OID 16477)
-- Name: requisite; Type: TABLE; Schema: public; Owner: tdeadmin
--

CREATE TABLE public.requisite (
    id uuid NOT NULL,
    short_name text NOT NULL,
    long_name text NOT NULL,
    legal_address text NOT NULL,
    inn text NOT NULL,
    kpp text NOT NULL,
    ogrn text NOT NULL,
    okato text NOT NULL,
    okved text NOT NULL,
    okpo text NOT NULL,
    okogu text NOT NULL,
    oktmo text NOT NULL,
    payment_address text NOT NULL,
    bank text NOT NULL,
    correspondence_address text NOT NULL,
    bik text NOT NULL,
    director_name text NOT NULL,
    director_surname text NOT NULL,
    director_patronymic text NOT NULL
);


ALTER TABLE public.requisite OWNER TO tdeadmin;

--
-- TOC entry 210 (class 1259 OID 16469)
-- Name: solution; Type: TABLE; Schema: public; Owner: tdeadmin
--

CREATE TABLE public.solution (
    id uuid NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    files uuid,
    images uuid
);


ALTER TABLE public.solution OWNER TO tdeadmin;

--
-- TOC entry 204 (class 1259 OID 16421)
-- Name: storage; Type: TABLE; Schema: public; Owner: tdeadmin
--

CREATE TABLE public.storage (
    id uuid NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    price money,
    nds boolean,
    count numeric,
    images uuid,
    files uuid
);


ALTER TABLE public.storage OWNER TO tdeadmin;

--
-- TOC entry 209 (class 1259 OID 16461)
-- Name: test_protocol; Type: TABLE; Schema: public; Owner: tdeadmin
--

CREATE TABLE public.test_protocol (
    id uuid NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    files uuid,
    images uuid
);


ALTER TABLE public.test_protocol OWNER TO tdeadmin;

--
-- TOC entry 2868 (class 2606 OID 16460)
-- Name: certificate certificate_pkey; Type: CONSTRAINT; Schema: public; Owner: tdeadmin
--

ALTER TABLE ONLY public.certificate
    ADD CONSTRAINT certificate_pkey PRIMARY KEY (id);


--
-- TOC entry 2866 (class 2606 OID 16452)
-- Name: contact contact_pkey; Type: CONSTRAINT; Schema: public; Owner: tdeadmin
--

ALTER TABLE ONLY public.contact
    ADD CONSTRAINT contact_pkey PRIMARY KEY (id);


--
-- TOC entry 2858 (class 2606 OID 16417)
-- Name: file file_pkey; Type: CONSTRAINT; Schema: public; Owner: tdeadmin
--

ALTER TABLE ONLY public.file
    ADD CONSTRAINT file_pkey PRIMARY KEY (id);


--
-- TOC entry 2856 (class 2606 OID 16409)
-- Name: image image_pkey; Type: CONSTRAINT; Schema: public; Owner: tdeadmin
--

ALTER TABLE ONLY public.image
    ADD CONSTRAINT image_pkey PRIMARY KEY (id);


--
-- TOC entry 2862 (class 2606 OID 16436)
-- Name: news news_pkey; Type: CONSTRAINT; Schema: public; Owner: tdeadmin
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);


--
-- TOC entry 2864 (class 2606 OID 16444)
-- Name: product production_pkey; Type: CONSTRAINT; Schema: public; Owner: tdeadmin
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT production_pkey PRIMARY KEY (id);


--
-- TOC entry 2874 (class 2606 OID 16484)
-- Name: requisite requisite_pkey; Type: CONSTRAINT; Schema: public; Owner: tdeadmin
--

ALTER TABLE ONLY public.requisite
    ADD CONSTRAINT requisite_pkey PRIMARY KEY (id);


--
-- TOC entry 2872 (class 2606 OID 16476)
-- Name: solution solution_pkey; Type: CONSTRAINT; Schema: public; Owner: tdeadmin
--

ALTER TABLE ONLY public.solution
    ADD CONSTRAINT solution_pkey PRIMARY KEY (id);


--
-- TOC entry 2860 (class 2606 OID 16428)
-- Name: storage storage_item_pkey; Type: CONSTRAINT; Schema: public; Owner: tdeadmin
--

ALTER TABLE ONLY public.storage
    ADD CONSTRAINT storage_item_pkey PRIMARY KEY (id);


--
-- TOC entry 2870 (class 2606 OID 16468)
-- Name: test_protocol test_protocol_pkey; Type: CONSTRAINT; Schema: public; Owner: tdeadmin
--

ALTER TABLE ONLY public.test_protocol
    ADD CONSTRAINT test_protocol_pkey PRIMARY KEY (id);


-- Completed on 2022-04-05 16:04:24

--
-- PostgreSQL database dump complete
--