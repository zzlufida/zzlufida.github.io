window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10874","name":"gl_v_mpostcond","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW gl_v_mpostcond AS \r\n\tSELECT * From gl_mpostcond where iYear=(select top 1 iYear from U8LoginProcess a inner join master..sysprocesses b \r\n\t on a.cStation=b.hostname and a.cProcessId=b.hostprocess where b.spid=@@spid and (cSub_id='DP' or cSub_id=N'QI'))","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"gl_v_mpostcond"},{"field":"Type","value":"View"}],"columns":[{"id":"column-207639","object_id":"column-207639","name":"iperiod","name_without_path":"iperiod","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207640","object_id":"column-207640","name":"csign","name_without_path":"csign","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207641","object_id":"column-207641","name":"ino_id","name_without_path":"ino_id","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207642","object_id":"column-207642","name":"iyear","name_without_path":"iyear","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};