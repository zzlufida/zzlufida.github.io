window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13775","name":"V_P2PReportMsg","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.V_P2PReportMsg\r\nAS\r\nSELECT TOP 10 MsgID, OriginMsgID, OriginAppSys, OriginAppType, OriginAppTag, \r\n      OriginMsgType, Synchronized\r\nFROM dbo.Engine_P2PComplete WITH (READPAST)\r\nWHERE (OnLine = 0) AND (Completed = 1)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_P2PReportMsg"},{"field":"Type","value":"View"}],"columns":[{"id":"column-398534","object_id":"column-398534","name":"MsgID","name_without_path":"MsgID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-398535","object_id":"column-398535","name":"OriginMsgID","name_without_path":"OriginMsgID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-398536","object_id":"column-398536","name":"OriginAppSys","name_without_path":"OriginAppSys","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-398537","object_id":"column-398537","name":"OriginAppType","name_without_path":"OriginAppType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-398538","object_id":"column-398538","name":"OriginAppTag","name_without_path":"OriginAppTag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-398539","object_id":"column-398539","name":"OriginMsgType","name_without_path":"OriginMsgType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-398540","object_id":"column-398540","name":"Synchronized","name_without_path":"Synchronized","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};