window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11945","name":"Pub_V_PermissionsForOR","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].Pub_V_PermissionsForOR\r\nAS\r\nselect cbusobid=\r\ncase cbusobid\r\nwhen 'neauth' then cbusobid+'0'\r\nelse cbusobid\r\nend\r\n,cbusobname=\r\ncase cbusobid\r\nwhen 'neauth' then cbusobname+'_部门' \r\n else cbusobname\r\nend\r\n,[langid]\r\nfrom aa_busobject_base  where  iauthtype=0\r\nunion \r\nselect  cbusobid+'1', cbusobname+'_业务员',[langid]\r\nfrom aa_busobject_base  where  iauthtype=0 and cBusObId ='neauth'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Pub_V_PermissionsForOR"},{"field":"Type","value":"View"}],"columns":[{"id":"column-263026","object_id":"column-263026","name":"cbusobid","name_without_path":"cbusobid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"51","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-263027","object_id":"column-263027","name":"cbusobname","name_without_path":"cbusobname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"307","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-263028","object_id":"column-263028","name":"langid","name_without_path":"langid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};