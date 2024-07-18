window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11993","name":"QM_QETLQUACHECK","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW DBO.QM_QETLQUACHECK\r\nAS\r\nSELECT\r\n\tDBO.QM_QETLBEFORECHECK.CCHECKTYPECODE,  \r\n\tDBO.QM_QETLBEFORECHECK.DEPARTMENTID, DBO.QM_QETLBEFORECHECK.INVID,  \r\n\tDBO.QM_QETLBEFORECHECK.SUPPLIERID, DBO.QM_QETLBEFORECHECK.BATCHCODE,  \r\n\tDBO.QM_QETLBEFORECHECK.CHECKDATE,  \r\n--<NOREPLACE>\r\n\t(CASE DBO.QM_QETLBEFORECHECK.ITESTSTYLE WHEN 0 THEN (CASE WHEN DBO.QM_QETLBEFORECHECK.VALIDQTY IS NULL AND \r\n\tDBO.QM_QETLAFTERCHECK.VALIDQTY IS NULL THEN NULL \r\n\tELSE ISNULL(DBO.QM_QETLBEFORECHECK.VALIDQTY, 0) \r\n\t+ ISNULL(DBO.QM_QETLAFTERCHECK.VALIDQTY, 0) END) ELSE NULL END) AS VALIDQTY, \r\n\t(CASE DBO.QM_QETLBEFORECHECK.ITESTSTYLE WHEN 0 THEN DBO.QM_QETLBEFORECHECK.CHECKQTY ELSE NULL END) AS CHECKQTY, \r\n--</NOREPLACE>\r\n\tDBO.QM_QETLBEFORECHECK.ARRIVALDATE,  \r\n\t\t--MODY BY SXH\r\n\t\t--(CASE DBO.QM_QETLBEFORECHECK.ITESTSTYLE WHEN 0 THEN\r\n\t\t--(CASE WHEN  (DBO.QM_QETLBEFORECHECK.INVALIDQTY IS NULL AND DBO.QM_QETLAFTERCHECK.INVALIDQTY IS NULL)\r\n\t\t--THEN NULL ELSE  (ISNULL(DBO.QM_QETLBEFORECHECK.INVALIDQTY, 0) + ISNULL(DBO.QM_QETLAFTERCHECK.INVALIDQTY, 0))\r\n\t\t--* DBO.INVENTORY.IINVSPRICE END) ELSE NULL END) AS INVALIDMONEY,\r\n--<NOREPLACE>\r\n\t(CASE DBO.QM_QETLBEFORECHECK.ITESTSTYLE WHEN 0 THEN DBO.QM_QETLBEFORECHECK.CHECKQTY\r\n\t* DBO.INVENTORY.IINVSPRICE ELSE DBO.QM_QETLBEFORECHECK.SAMPLEQTY * DBO.INVENTORY.IINVSPRICE END) AS INVALIDMONEY, \r\n\t\r\n\t(CASE DBO.QM_QETLBEFORECHECK.ITESTSTYLE WHEN 0 THEN DBO.QM_QETLREJECTINFO.RETQTY ELSE NULL END) AS RETQTY,     \r\n--</NOREPLACE>\r\n\tDBO.QM_QETLBEFORECHECK.SAMPLEQTY,  \r\n\tDBO.QM_QETLBEFORECHECK.SAMPLEVALID,  \r\n\tDBO.QM_QETLBEFORECHECK.VALIDBATCHNUM,  \r\n\tDBO.QM_QETLBEFORECHECK.CHECKBATCHNUM,  \r\n\tDBO.QM_QETLBEFORECHECK.ITESTSTYLE\r\nFROM\r\n\tDBO.QM_QETLBEFORECHECK LEFT OUTER JOIN\r\n\tDBO.INVENTORY ON\r\n\tDBO.QM_QETLBEFORECHECK.INVID = DBO.INVENTORY.CINVCODE LEFT OUTER JOIN\r\n\tDBO.QM_QETLREJECTINFO ON\r\n\tDBO.QM_QETLBEFORECHECK.ID = DBO.QM_QETLREJECTINFO.CHECKID LEFT OUTER JOIN\r\n\tDBO.QM_QETLAFTERCHECK ON\r\n\tDBO.QM_QETLBEFORECHECK.ID = DBO.QM_QETLAFTERCHECK.ID\r\n--ENDFROM","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"QM_QETLQUACHECK"},{"field":"Type","value":"View"}],"columns":[{"id":"column-267209","object_id":"column-267209","name":"CCHECKTYPECODE","name_without_path":"CCHECKTYPECODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267210","object_id":"column-267210","name":"DEPARTMENTID","name_without_path":"DEPARTMENTID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267211","object_id":"column-267211","name":"INVID","name_without_path":"INVID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267212","object_id":"column-267212","name":"SUPPLIERID","name_without_path":"SUPPLIERID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267213","object_id":"column-267213","name":"BATCHCODE","name_without_path":"BATCHCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267214","object_id":"column-267214","name":"CHECKDATE","name_without_path":"CHECKDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267215","object_id":"column-267215","name":"VALIDQTY","name_without_path":"VALIDQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"29, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267216","object_id":"column-267216","name":"CHECKQTY","name_without_path":"CHECKQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267217","object_id":"column-267217","name":"ARRIVALDATE","name_without_path":"ARRIVALDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267218","object_id":"column-267218","name":"INVALIDMONEY","name_without_path":"INVALIDMONEY","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267219","object_id":"column-267219","name":"RETQTY","name_without_path":"RETQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267220","object_id":"column-267220","name":"SAMPLEQTY","name_without_path":"SAMPLEQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267221","object_id":"column-267221","name":"SAMPLEVALID","name_without_path":"SAMPLEVALID","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267222","object_id":"column-267222","name":"VALIDBATCHNUM","name_without_path":"VALIDBATCHNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267223","object_id":"column-267223","name":"CHECKBATCHNUM","name_without_path":"CHECKBATCHNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-267224","object_id":"column-267224","name":"ITESTSTYLE","name_without_path":"ITESTSTYLE","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};