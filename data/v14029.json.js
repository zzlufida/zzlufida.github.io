window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14029","name":"V_SyncMsgSenderAndReceiver","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.V_SyncMsgSenderAndReceiver\r\nAS\r\nSELECT dbo.Engine_P2PTargetInfo.TargetEntityTag, \r\n      dbo.Engine_P2PTargetInfo.TargetAppType, dbo.Engine_P2PTargetInfo.TargetAppTag, \r\n      dbo.Engine_P2PTargetInfo.TargetMsgType, dbo.Engine_P2PMsg.OriginMsgType, \r\n      dbo.Engine_P2PMsg.OriginEntityTag, dbo.Engine_P2PMsg.OriginAppType, \r\n      dbo.Engine_P2PMsg.OriginAppTag, dbo.Engine_P2PMsg.MsgID\r\nFROM dbo.Engine_P2PMsg INNER JOIN\r\n      dbo.Engine_P2PTargetInfo ON \r\n      dbo.Engine_P2PMsg.MsgID = dbo.Engine_P2PTargetInfo.MsgID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_SyncMsgSenderAndReceiver"},{"field":"Type","value":"View"}],"columns":[{"id":"column-412414","object_id":"column-412414","name":"TargetEntityTag","name_without_path":"TargetEntityTag","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412415","object_id":"column-412415","name":"TargetAppType","name_without_path":"TargetAppType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412416","object_id":"column-412416","name":"TargetAppTag","name_without_path":"TargetAppTag","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412417","object_id":"column-412417","name":"TargetMsgType","name_without_path":"TargetMsgType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412418","object_id":"column-412418","name":"OriginMsgType","name_without_path":"OriginMsgType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412419","object_id":"column-412419","name":"OriginEntityTag","name_without_path":"OriginEntityTag","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412420","object_id":"column-412420","name":"OriginAppType","name_without_path":"OriginAppType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412421","object_id":"column-412421","name":"OriginAppTag","name_without_path":"OriginAppTag","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412422","object_id":"column-412422","name":"MsgID","name_without_path":"MsgID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};