window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13747","name":"V_MsgType","subtype":"VIEW","is_user_defined":false,"description":null,"script":"/************** end **********************************************************************/\r\n\r\n\r\n\r\n\r\n/************** 视图定义 *****************************************************************/\r\n\r\nCREATE VIEW dbo.V_MsgType\r\nAS\r\nSELECT dbo.MOM_MsgType.ID AS ID, dbo.MOM_MsgType.MsgType AS MsgType, dbo.MOM_MsgType.FriendName AS FriendName,\r\n       dbo.MOM_MsgType.AppTypeID AS AppTypeID, dbo.MOM_MsgType.MsgTypeCategoryID AS MsgTypeCategoryID,\r\n       dbo.MOM_MsgType.MsgFilterID AS MsgFilterID, dbo.MOM_MsgType.Description AS Description,\r\n       dbo.MOM_MsgTypeCategories.MsgTypeCategory AS MsgTypeCategory\r\nFROM dbo.MOM_MsgType INNER JOIN\r\n      dbo.MOM_MsgTypeCategories ON \r\n      dbo.MOM_MsgType.MsgTypeCategoryID = dbo.MOM_MsgTypeCategories.ID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_MsgType"},{"field":"Type","value":"View"}],"columns":[{"id":"column-397264","object_id":"column-397264","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397265","object_id":"column-397265","name":"MsgType","name_without_path":"MsgType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397266","object_id":"column-397266","name":"FriendName","name_without_path":"FriendName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397267","object_id":"column-397267","name":"AppTypeID","name_without_path":"AppTypeID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397268","object_id":"column-397268","name":"MsgTypeCategoryID","name_without_path":"MsgTypeCategoryID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397269","object_id":"column-397269","name":"MsgFilterID","name_without_path":"MsgFilterID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397270","object_id":"column-397270","name":"Description","name_without_path":"Description","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397271","object_id":"column-397271","name":"MsgTypeCategory","name_without_path":"MsgTypeCategory","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};