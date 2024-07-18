window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10999","name":"GSP_QOBJECTPLANB","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW DBO.GSP_QOBJECTPLANB\r\nAS\r\nSELECT DBO.GSP_VOUCHMANUAL.ID, DBO.GSP_VOUCHMANUAL.CCODE, \r\n      DBO.GSP_VOUCHMANUAL.CNAME, DBO.GSP_VOUCHMANUAL.CDEPCODE, \r\n      DBO.GSP_VOUCHMANUAL.CVERIFIER, DBO.GSP_VOUCHMANUAL.CMAKER, \r\n      DBO.GSP_VOUCHMANUAL.DDATE, DBO.GSP_VOUCHMANUAL.CPATH, \r\n      DBO.GSP_VOUCHMANUAL.CTEMPATH, DBO.GSP_VOUCHMANUAL.FYEAR, \r\n      DBO.DEPARTMENT.CDEPNAME, DBO.GSP_VOUCHMANUAL.CVOUCHTYPE, \r\n      DBO.GSP_VOUCHMANUAL.IVTID, CONVERT(CHAR, CONVERT(MONEY, \r\n      DBO.GSP_VOUCHMANUAL.UFTS), 2) AS UFTS\r\nFROM DBO.GSP_VOUCHMANUAL LEFT OUTER JOIN\r\n      DBO.DEPARTMENT ON \r\n      DBO.GSP_VOUCHMANUAL.CDEPCODE = DBO.DEPARTMENT.CDEPCODE\r\nWHERE (DBO.GSP_VOUCHMANUAL.CVOUCHTYPE = '061')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"GSP_QOBJECTPLANB"},{"field":"Type","value":"View"}],"columns":[{"id":"column-214285","object_id":"column-214285","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-214286","object_id":"column-214286","name":"CCODE","name_without_path":"CCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-214287","object_id":"column-214287","name":"CNAME","name_without_path":"CNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-214288","object_id":"column-214288","name":"CDEPCODE","name_without_path":"CDEPCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-214289","object_id":"column-214289","name":"CVERIFIER","name_without_path":"CVERIFIER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-214290","object_id":"column-214290","name":"CMAKER","name_without_path":"CMAKER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-214291","object_id":"column-214291","name":"DDATE","name_without_path":"DDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-214292","object_id":"column-214292","name":"CPATH","name_without_path":"CPATH","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-214293","object_id":"column-214293","name":"CTEMPATH","name_without_path":"CTEMPATH","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-214294","object_id":"column-214294","name":"FYEAR","name_without_path":"FYEAR","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-214295","object_id":"column-214295","name":"CDEPNAME","name_without_path":"CDEPNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-214296","object_id":"column-214296","name":"CVOUCHTYPE","name_without_path":"CVOUCHTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-214297","object_id":"column-214297","name":"IVTID","name_without_path":"IVTID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-214298","object_id":"column-214298","name":"UFTS","name_without_path":"UFTS","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};