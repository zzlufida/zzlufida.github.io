window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10754","name":"FB_SubSys_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW FB_SubSys_View    \r\nAS     \r\nSELECT cEntType,cSub_Id,cSub_Name,dStart,iorder \r\nFROM UA_SubSys  \r\nunion \r\nSELECT Null as cEntType,'无' as cSub_Id,'无' as cSub_Name,null as dStart,999.0 as iorder \r\nFROM UA_SubSys","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"FB_SubSys_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-204293","object_id":"column-204293","name":"cEntType","name_without_path":"cEntType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204294","object_id":"column-204294","name":"cSub_Id","name_without_path":"cSub_Id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204295","object_id":"column-204295","name":"cSub_Name","name_without_path":"cSub_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204296","object_id":"column-204296","name":"dStart","name_without_path":"dStart","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204297","object_id":"column-204297","name":"iorder","name_without_path":"iorder","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"10, 4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};