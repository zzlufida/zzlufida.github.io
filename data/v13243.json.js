window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13243","name":"V_GC_JOINTSETS_CUS","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.V_GC_JOINTSETS_CUS\r\nAS\r\nSELECT     dbo.GC_JOINTSETS.id, dbo.GC_JOINTSETS.autoid, dbo.GC_JOINTSETS.cvencuscode, \r\n                      ISNULL(dbo.GC_JOINTSETS.cvencusname, N'') AS cvencusname, dbo.GC_JOINTSETS.accid, dbo.GC_REGIST.acccode, \r\n                      dbo.GC_REGIST.caddress, REPLICATE('*', LEN(dbo.GC_REGIST.cdbpwd)) AS cdbpwd, dbo.GC_REGIST.datasource, \r\n                      dbo.GC_REGIST.cuser_id, REPLICATE('*', LEN(dbo.GC_REGIST.cpassword)) AS cpassword, dbo.GC_REGIST.cacc_id, \r\n                      dbo.GC_REGIST.cdatabase, dbo.GC_REGIST.caccname, dbo.GC_REGIST.ibeginyear, '客户关系' AS itype, \r\n                      dbo.GC_JOINTSETS.cremark\r\nFROM         dbo.GC_JOINTSETS INNER JOIN\r\n                      dbo.GC_REGIST ON dbo.GC_JOINTSETS.accid = dbo.GC_REGIST.accid INNER JOIN\r\n                      dbo.GC_JOINTSET ON dbo.GC_JOINTSETS.id = dbo.GC_JOINTSET.id\r\nWHERE     (dbo.GC_JOINTSETS.itype = 0)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_GC_JOINTSETS_CUS"},{"field":"Type","value":"View"}],"columns":[{"id":"column-358606","object_id":"column-358606","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358607","object_id":"column-358607","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358608","object_id":"column-358608","name":"cvencuscode","name_without_path":"cvencuscode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358609","object_id":"column-358609","name":"cvencusname","name_without_path":"cvencusname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358610","object_id":"column-358610","name":"accid","name_without_path":"accid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358611","object_id":"column-358611","name":"acccode","name_without_path":"acccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358612","object_id":"column-358612","name":"caddress","name_without_path":"caddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358613","object_id":"column-358613","name":"cdbpwd","name_without_path":"cdbpwd","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"8000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358614","object_id":"column-358614","name":"datasource","name_without_path":"datasource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358615","object_id":"column-358615","name":"cuser_id","name_without_path":"cuser_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358616","object_id":"column-358616","name":"cpassword","name_without_path":"cpassword","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"8000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358617","object_id":"column-358617","name":"cacc_id","name_without_path":"cacc_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358618","object_id":"column-358618","name":"cdatabase","name_without_path":"cdatabase","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358619","object_id":"column-358619","name":"caccname","name_without_path":"caccname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358620","object_id":"column-358620","name":"ibeginyear","name_without_path":"ibeginyear","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358621","object_id":"column-358621","name":"itype","name_without_path":"itype","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358622","object_id":"column-358622","name":"cremark","name_without_path":"cremark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};