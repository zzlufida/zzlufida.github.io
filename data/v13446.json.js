window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13446","name":"V_IB_MsgChannel_Extend","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.V_IB_MsgChannel_Extend\r\nAS\r\nSELECT dbo.IB_MsgChannel.ID, dbo.IB_MsgChannel.OriginAppSys, \r\n      dbo.IB_MsgChannel.OriginAppType, dbo.IB_MsgChannel.OriginAppTag, \r\n      dbo.IB_MsgChannel.OriginMsgType, dbo.IB_MsgChannel.TargetAppSys, \r\n      dbo.IB_MsgChannel.TargetAppType, dbo.IB_MsgChannel.TargetAppTag, \r\n      dbo.IB_MsgChannel.TargetMsgType, dbo.V_IB_Entities.PubKey AS PK_Entity_O, \r\n      dbo.V_IB_Entities.ExtendProperties AS EP_Entity_O, \r\n      dbo.IB_AppType.PubKey AS PK_AppType_O, \r\n      dbo.IB_AppType.ExtendProperties AS EP_AppType_O, \r\n      dbo.IB_AppTag.PubKey AS PK_AppTag_O, \r\n      dbo.IB_AppTag.ExtendProperties AS EP_AppTag_O,\r\n      dbo.IB_MsgType.ExtendProperties AS EP_MsgType_O\r\nFROM dbo.IB_MsgChannel INNER JOIN\r\n      dbo.V_IB_Entities ON \r\n      dbo.IB_MsgChannel.OriginAppSys = dbo.V_IB_Entities.ID INNER JOIN\r\n      dbo.IB_AppType ON \r\n      dbo.IB_MsgChannel.OriginAppType = dbo.IB_AppType.ID LEFT OUTER JOIN\r\n      dbo.IB_AppTag ON dbo.IB_MsgChannel.OriginAppTag = dbo.IB_AppTag.ID LEFT OUTER JOIN\r\n      dbo.IB_MsgType ON dbo.IB_MsgChannel.OriginMsgType = dbo.IB_MsgType.ID\r\nWHERE (dbo.IB_MsgChannel.IsTemplate = 0)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_IB_MsgChannel_Extend"},{"field":"Type","value":"View"}],"columns":[{"id":"column-375190","object_id":"column-375190","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375191","object_id":"column-375191","name":"OriginAppSys","name_without_path":"OriginAppSys","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375192","object_id":"column-375192","name":"OriginAppType","name_without_path":"OriginAppType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375193","object_id":"column-375193","name":"OriginAppTag","name_without_path":"OriginAppTag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375194","object_id":"column-375194","name":"OriginMsgType","name_without_path":"OriginMsgType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375195","object_id":"column-375195","name":"TargetAppSys","name_without_path":"TargetAppSys","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375196","object_id":"column-375196","name":"TargetAppType","name_without_path":"TargetAppType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375197","object_id":"column-375197","name":"TargetAppTag","name_without_path":"TargetAppTag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375198","object_id":"column-375198","name":"TargetMsgType","name_without_path":"TargetMsgType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375199","object_id":"column-375199","name":"PK_Entity_O","name_without_path":"PK_Entity_O","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"512","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375200","object_id":"column-375200","name":"EP_Entity_O","name_without_path":"EP_Entity_O","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375201","object_id":"column-375201","name":"PK_AppType_O","name_without_path":"PK_AppType_O","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"512","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375202","object_id":"column-375202","name":"EP_AppType_O","name_without_path":"EP_AppType_O","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375203","object_id":"column-375203","name":"PK_AppTag_O","name_without_path":"PK_AppTag_O","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"512","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375204","object_id":"column-375204","name":"EP_AppTag_O","name_without_path":"EP_AppTag_O","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-375205","object_id":"column-375205","name":"EP_MsgType_O","name_without_path":"EP_MsgType_O","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};