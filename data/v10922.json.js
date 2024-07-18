window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10922","name":"GSP_QDEVICEBYLIST","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW DBO.GSP_QDEVICEBYLIST\r\nAS\r\nSELECT DBO.GSP_VOUCHDEVICE.CDEVICEID, DBO.GSP_VOUCHDEVICE.DDATE, \r\n      DBO.GSP_VOUCHDEVICE.CPERSON, DBO.GSP_VOUCHDEVICE.CMEMO, \r\n      DBO.GSP_VOUCHDEVICE.CDEPCODE, DBO.GSP_DEVICEINFO.CNAME, \r\n      DBO.GSP_VOUCHDEVICE.ID, DBO.GSP_DEVICEINFO.CDEVICESTD, \r\n      DBO.GSP_VOUCHDEVICE.CID, DBO.GSP_VOUCHDEVICE.DCDATE, \r\n      DBO.GSP_VOUCHDEVICE.CUNITCODE, DBO.GSP_VOUCHDEVICE.CMARK, \r\n      DBO.GSP_VOUCHDEVICE.CMAKER, DBO.GSP_VOUCHDEVICE.CVERIFIER, \r\n      DBO.GSP_VOUCHDEVICE.CVOUCHTYPE, DBO.GSP_VOUCHDEVICE.IVTID, \r\n      DBO.GSP_VOUCHDEVICE.CDEFINE1, DBO.GSP_VOUCHDEVICE.CDEFINE2, \r\n      DBO.GSP_VOUCHDEVICE.CDEFINE3, DBO.GSP_VOUCHDEVICE.CDEFINE4, \r\n      DBO.GSP_VOUCHDEVICE.CDEFINE5, DBO.GSP_VOUCHDEVICE.CDEFINE6, \r\n      CONVERT(CHAR, CONVERT(MONEY, DBO.GSP_VOUCHDEVICE.UFTS), 2) \r\n      AS UFTS, DBO.GSP_DEVICETYPE.CNAME AS CNAMES, \r\n      DBO.DEPARTMENT.CDEPNAME\r\nFROM DBO.GSP_VOUCHDEVICE LEFT OUTER JOIN\r\n      DBO.DEPARTMENT ON \r\n      DBO.GSP_VOUCHDEVICE.CDEPCODE = DBO.DEPARTMENT.CDEPCODE LEFT OUTER JOIN\r\n      DBO.GSP_DEVICEINFO ON \r\n      DBO.GSP_VOUCHDEVICE.CDEVICEID = DBO.GSP_DEVICEINFO.CDEVICEID LEFT OUTER\r\n       JOIN\r\n      DBO.GSP_DEVICETYPE ON \r\n      DBO.GSP_DEVICEINFO.CDEVICETYPEID = DBO.GSP_DEVICETYPE.CCODE\r\nWHERE (DBO.GSP_VOUCHDEVICE.CVOUCHTYPE = N'076')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"GSP_QDEVICEBYLIST"},{"field":"Type","value":"View"}],"columns":[{"id":"column-210038","object_id":"column-210038","name":"CDEVICEID","name_without_path":"CDEVICEID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210039","object_id":"column-210039","name":"DDATE","name_without_path":"DDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210040","object_id":"column-210040","name":"CPERSON","name_without_path":"CPERSON","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210041","object_id":"column-210041","name":"CMEMO","name_without_path":"CMEMO","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210042","object_id":"column-210042","name":"CDEPCODE","name_without_path":"CDEPCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210043","object_id":"column-210043","name":"CNAME","name_without_path":"CNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210044","object_id":"column-210044","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210045","object_id":"column-210045","name":"CDEVICESTD","name_without_path":"CDEVICESTD","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210046","object_id":"column-210046","name":"CID","name_without_path":"CID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210047","object_id":"column-210047","name":"DCDATE","name_without_path":"DCDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210048","object_id":"column-210048","name":"CUNITCODE","name_without_path":"CUNITCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210049","object_id":"column-210049","name":"CMARK","name_without_path":"CMARK","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210050","object_id":"column-210050","name":"CMAKER","name_without_path":"CMAKER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210051","object_id":"column-210051","name":"CVERIFIER","name_without_path":"CVERIFIER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210052","object_id":"column-210052","name":"CVOUCHTYPE","name_without_path":"CVOUCHTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210053","object_id":"column-210053","name":"IVTID","name_without_path":"IVTID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210054","object_id":"column-210054","name":"CDEFINE1","name_without_path":"CDEFINE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210055","object_id":"column-210055","name":"CDEFINE2","name_without_path":"CDEFINE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210056","object_id":"column-210056","name":"CDEFINE3","name_without_path":"CDEFINE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210057","object_id":"column-210057","name":"CDEFINE4","name_without_path":"CDEFINE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210058","object_id":"column-210058","name":"CDEFINE5","name_without_path":"CDEFINE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210059","object_id":"column-210059","name":"CDEFINE6","name_without_path":"CDEFINE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210060","object_id":"column-210060","name":"UFTS","name_without_path":"UFTS","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210061","object_id":"column-210061","name":"CNAMES","name_without_path":"CNAMES","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210062","object_id":"column-210062","name":"CDEPNAME","name_without_path":"CDEPNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};