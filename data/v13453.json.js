window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13453","name":"V_IB_MsgType","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  VIEW dbo.V_IB_MsgType\r\nAS\r\nSELECT dbo.IB_MsgType.ID, dbo.IB_MsgType.MsgType, dbo.IB_MsgType.FriendName, \r\n      dbo.IB_MsgType.AppTypeID, dbo.IB_MsgType.MsgTypeCategoryID, \r\n      dbo.IB_MsgType.MsgFilterID, dbo.IB_MsgType.Description, \r\n      dbo.MOM_MsgTypeCategories.MsgTypeCategory, \r\n      dbo.IB_MsgType.ExtendProperties,\r\n      dbo.IB_MsgType.Customize\r\nFROM dbo.IB_MsgType INNER JOIN\r\n      dbo.MOM_MsgTypeCategories ON \r\n      dbo.IB_MsgType.MsgTypeCategoryID = dbo.MOM_MsgTypeCategories.ID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_IB_MsgType"},{"field":"Type","value":"View"}],"columns":[{"id":"column-375319","object_id":"column-375319","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375320","object_id":"column-375320","name":"MsgType","name_without_path":"MsgType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375321","object_id":"column-375321","name":"FriendName","name_without_path":"FriendName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375322","object_id":"column-375322","name":"AppTypeID","name_without_path":"AppTypeID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375323","object_id":"column-375323","name":"MsgTypeCategoryID","name_without_path":"MsgTypeCategoryID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375324","object_id":"column-375324","name":"MsgFilterID","name_without_path":"MsgFilterID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375325","object_id":"column-375325","name":"Description","name_without_path":"Description","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375326","object_id":"column-375326","name":"MsgTypeCategory","name_without_path":"MsgTypeCategory","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375327","object_id":"column-375327","name":"ExtendProperties","name_without_path":"ExtendProperties","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375328","object_id":"column-375328","name":"Customize","name_without_path":"Customize","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};