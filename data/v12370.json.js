window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12370","name":"SQ_SQEXCEPTIONLIST","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW SQ_SQEXCEPTIONLIST AS   \r\nSELECT SQ_SQEXCEPTION.ID, SQ_SQRESULTMAINB.CSQCODE, SQ_SQEXCEPTION.CGRADE,   \r\nSQ_SQEXCEPTION.CTYPE, SQ_SQEXCEPTION.PARTID as PWID, BAS_PART.INVCODE AS CCODE,INVENTORY.CINVNAME AS CNAME,INVENTORY.cInvAddCode as cInvAddCode,  \r\nSQ_SQEXCEPTION.CDESCRIPTION,BAS_PART.FREE1 AS CFREE1,BAS_PART.FREE2 AS CFREE2,BAS_PART.FREE3 AS CFREE3,BAS_PART.FREE4 AS CFREE4,BAS_PART.FREE5 AS CFREE5,\r\nBAS_PART.FREE6 AS CFREE6,BAS_PART.FREE7 AS CFREE7,BAS_PART.FREE8 AS CFREE8,BAS_PART.FREE9 AS CFREE9,BAS_PART.FREE10 AS CFREE10  ,INVENTORY.CINVSTD\r\nFROM SQ_SQEXCEPTION INNER JOIN SQ_SQRESULTMAINB ON SQ_SQEXCEPTION.ID=SQ_SQRESULTMAINB.ID   \r\nINNER JOIN BAS_PART ON BAS_PART.PARTID=SQ_SQEXCEPTION.PARTID  \r\nINNER JOIN INVENTORY ON BAS_PART.INVCODE=INVENTORY.CINVCODE  \r\nWHERE SQ_SQEXCEPTION.CTYPE='物料'  \r\nUNION  \r\nSELECT  SQ_SQEXCEPTION.ID, SQ_SQRESULTMAINB.CSQCODE, SQ_SQEXCEPTION.CGRADE,   \r\nSQ_SQEXCEPTION.CTYPE, SQ_SQEXCEPTION.WCID as PWID, SFC_WORKCENTER.WCCODE AS CCODE,SFC_WORKCENTER.DESCRIPTION AS CNAME,null as cInvAddCode,  \r\nSQ_SQEXCEPTION.CDESCRIPTION,null as CFREE1,null as CFREE2,null as CFREE3,null as CFREE4,null as CFREE5,null as CFREE6,null as CFREE7,null as CFREE8,null as CFREE9,null as CFREE10 ,\r\nnull as  CINVSTD\r\nFROM SQ_SQEXCEPTION INNER JOIN SQ_SQRESULTMAINB ON SQ_SQEXCEPTION.ID=SQ_SQRESULTMAINB.ID   \r\nINNER JOIN SFC_WORKCENTER ON SFC_WORKCENTER.WCID=SQ_SQEXCEPTION.WCID  \r\nWHERE SQ_SQEXCEPTION.CTYPE='工作中心'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SQ_SQEXCEPTIONLIST"},{"field":"Type","value":"View"}],"columns":[{"id":"column-301129","object_id":"column-301129","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301130","object_id":"column-301130","name":"CSQCODE","name_without_path":"CSQCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301131","object_id":"column-301131","name":"CGRADE","name_without_path":"CGRADE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301132","object_id":"column-301132","name":"CTYPE","name_without_path":"CTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301133","object_id":"column-301133","name":"PWID","name_without_path":"PWID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301134","object_id":"column-301134","name":"CCODE","name_without_path":"CCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301135","object_id":"column-301135","name":"CNAME","name_without_path":"CNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301136","object_id":"column-301136","name":"cInvAddCode","name_without_path":"cInvAddCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301137","object_id":"column-301137","name":"CDESCRIPTION","name_without_path":"CDESCRIPTION","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301138","object_id":"column-301138","name":"CFREE1","name_without_path":"CFREE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301139","object_id":"column-301139","name":"CFREE2","name_without_path":"CFREE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301140","object_id":"column-301140","name":"CFREE3","name_without_path":"CFREE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301141","object_id":"column-301141","name":"CFREE4","name_without_path":"CFREE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301142","object_id":"column-301142","name":"CFREE5","name_without_path":"CFREE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301143","object_id":"column-301143","name":"CFREE6","name_without_path":"CFREE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301144","object_id":"column-301144","name":"CFREE7","name_without_path":"CFREE7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301145","object_id":"column-301145","name":"CFREE8","name_without_path":"CFREE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301146","object_id":"column-301146","name":"CFREE9","name_without_path":"CFREE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301147","object_id":"column-301147","name":"CFREE10","name_without_path":"CFREE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301148","object_id":"column-301148","name":"CINVSTD","name_without_path":"CINVSTD","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};