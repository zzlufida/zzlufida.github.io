window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13687","name":"V_MOM_SAToMoQty","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view V_MOM_SAToMoQty\r\nAs\r\nselect d.OrderDId,SUM(CASE WHEN i.cSRPolicy = 'LP' and d.SoType = 1 then (d.Qty - d.QualifiedInQty)\r\n                     else  isnull(d.Qty,0) END) AS Qty\r\nfrom mom_orderdetail d\r\ninner join inventory i on d.InvCode = i.cInvCode\r\nwhere d.OrdFlag = 1 AND d.OrderType = 1-- AND ((i.cSRPolicy = 'LP' AND d.Qty >= d.QualifiedInQty  ) OR i.cSRPolicy = 'PE' ) \r\ngroup by d.OrderDId","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_MOM_SAToMoQty"},{"field":"Type","value":"View"}],"columns":[{"id":"column-395559","object_id":"column-395559","name":"OrderDId","name_without_path":"OrderDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395560","object_id":"column-395560","name":"Qty","name_without_path":"Qty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};