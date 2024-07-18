window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12635","name":"v_auth_User","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.v_auth_User AS \r\nselect cUser_id ,cUser_Name ,0 as isUserGroup from ufsystem..ua_user\r\nunion all\r\nselect cGroup_id as cUser_id,cGroup_Name as cUser_Name,1 as isUserGroup from ufsystem..ua_group","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_auth_User"},{"field":"Type","value":"View"}],"columns":[{"id":"column-314686","object_id":"column-314686","name":"cUser_id","name_without_path":"cUser_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314687","object_id":"column-314687","name":"cUser_Name","name_without_path":"cUser_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314688","object_id":"column-314688","name":"isUserGroup","name_without_path":"isUserGroup","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};