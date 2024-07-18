window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11048","name":"GSP_QSTANFILEB","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW DBO.GSP_QSTANFILEB\r\nAS\r\nSELECT DBO.GSP_ARCHIVE.ID, DBO.GSP_ARCHIVE.CCODE, DBO.GSP_ARCHIVE.CNAME, \r\n      DBO.GSP_ARCHIVE.CDEPCODE, DBO.GSP_ARCHIVE.DDATE, \r\n      DBO.GSP_ARCHIVE.CMAKER, DBO.GSP_ARCHIVE.CVERIFIER, \r\n      DBO.GSP_ARCHIVE.CAPPROVER, DBO.GSP_ARCHIVE.CTEMPPATH, \r\n      DBO.GSP_ARCHIVE.CFILEPATH, CONVERT(CHAR, CONVERT(MONEY, \r\n      DBO.GSP_ARCHIVE.UFTS), 2) AS UFTS, DBO.GSP_ARCHIVE.CPARENTNODE, \r\n      DBO.GSP_ARCHIVE.CVOUCHTYPE, DBO.GSP_ARCHIVE.IVTID, \r\n      DBO.DEPARTMENT.CDEPNAME, DBO.GSP_ARCHIVE.CFILE\r\nFROM DBO.GSP_ARCHIVE LEFT OUTER JOIN\r\n      DBO.DEPARTMENT ON \r\n      DBO.GSP_ARCHIVE.CDEPCODE = DBO.DEPARTMENT.CDEPCODE\r\nWHERE (DBO.GSP_ARCHIVE.CVOUCHTYPE = '080')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"GSP_QSTANFILEB"},{"field":"Type","value":"View"}],"columns":[{"id":"column-216609","object_id":"column-216609","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216610","object_id":"column-216610","name":"CCODE","name_without_path":"CCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216611","object_id":"column-216611","name":"CNAME","name_without_path":"CNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216612","object_id":"column-216612","name":"CDEPCODE","name_without_path":"CDEPCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216613","object_id":"column-216613","name":"DDATE","name_without_path":"DDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216614","object_id":"column-216614","name":"CMAKER","name_without_path":"CMAKER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216615","object_id":"column-216615","name":"CVERIFIER","name_without_path":"CVERIFIER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216616","object_id":"column-216616","name":"CAPPROVER","name_without_path":"CAPPROVER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216617","object_id":"column-216617","name":"CTEMPPATH","name_without_path":"CTEMPPATH","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216618","object_id":"column-216618","name":"CFILEPATH","name_without_path":"CFILEPATH","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216619","object_id":"column-216619","name":"UFTS","name_without_path":"UFTS","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216620","object_id":"column-216620","name":"CPARENTNODE","name_without_path":"CPARENTNODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216621","object_id":"column-216621","name":"CVOUCHTYPE","name_without_path":"CVOUCHTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216622","object_id":"column-216622","name":"IVTID","name_without_path":"IVTID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216623","object_id":"column-216623","name":"CDEPNAME","name_without_path":"CDEPNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-216624","object_id":"column-216624","name":"CFILE","name_without_path":"CFILE","description":null,"is_pk":false,"is_identity":false,"data_type":"image","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};