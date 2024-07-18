window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13759","name":"v_om_mps_atpdetail","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.v_om_mps_atpdetail AS  \r\n       Select Guid,DDemDate = Date,DRefCode =DocCode, DRefSeq =  DocSeq,DDemType =DemType,DStatus = Status,\r\n       DIsSupply = IsSupply,DQty=Qty, DBalQty =BalQty from v_mps_atpdetail","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_om_mps_atpdetail"},{"field":"Type","value":"View"}],"columns":[{"id":"column-397879","object_id":"column-397879","name":"Guid","name_without_path":"Guid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397880","object_id":"column-397880","name":"DDemDate","name_without_path":"DDemDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397881","object_id":"column-397881","name":"DRefCode","name_without_path":"DRefCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397882","object_id":"column-397882","name":"DRefSeq","name_without_path":"DRefSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397883","object_id":"column-397883","name":"DDemType","name_without_path":"DDemType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397884","object_id":"column-397884","name":"DStatus","name_without_path":"DStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397885","object_id":"column-397885","name":"DIsSupply","name_without_path":"DIsSupply","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397886","object_id":"column-397886","name":"DQty","name_without_path":"DQty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397887","object_id":"column-397887","name":"DBalQty","name_without_path":"DBalQty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};