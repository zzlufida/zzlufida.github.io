window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13698","name":"v_mps_atphead","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_mps_atphead\r\nas\r\nselect distinct m1.Guid,\r\n       SoCode = (select m2.SoCode from mps_atpdetail m2 where m1.Guid = m2.Guid and ((m2.SoCode is not null or m2.SoCode <> '') and m2.SoDId <> 0)),--销售订单号码\r\n       SoSeq = (select m2.SoSeq from mps_atpdetail m2 where m1.Guid = m2.Guid and ((m2.SoCode is not null or m2.SoCode <> '') and m2.SoDId <> 0)),--销售订单行号\r\n       SoType = (select m2.SoType from mps_atpdetail m2 where m1.Guid = m2.Guid and ((m2.SoCode is not null or m2.SoCode <> '') and m2.SoDId <> 0)),--类别 0-其他/1-销售/2-预测/3出口\r\n       Qty = (select m2.Qty from mps_atpdetail m2 where m1.Guid = m2.Guid and m2.demtype = 0)--现存量\r\n from mps_atpdetail m1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_mps_atphead"},{"field":"Type","value":"View"}],"columns":[{"id":"column-395840","object_id":"column-395840","name":"Guid","name_without_path":"Guid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395841","object_id":"column-395841","name":"SoCode","name_without_path":"SoCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395842","object_id":"column-395842","name":"SoSeq","name_without_path":"SoSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395843","object_id":"column-395843","name":"SoType","name_without_path":"SoType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395844","object_id":"column-395844","name":"Qty","name_without_path":"Qty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};