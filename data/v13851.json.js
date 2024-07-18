window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13851","name":"v_sfc_morouting_dept","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_sfc_morouting_dept\r\nAs\r\nselect m.MoDId,m.MoRoutingId,md.MoRoutingDId,w.DeptCode, ISNULL(p.PFId,0) as PFId, ISNULL(pd.PFDId,0) as PFDId\r\nfrom sfc_morouting m inner join sfc_moroutingdetail md on m.MoRoutingId = md.MoRoutingId inner join sfc_workcenter w on w.WcId = md.WcId\r\nleft outer join sfc_processflow p on p.MoRoutingId = m.MoRoutingId left outer join sfc_processflowdetail pd on pd.MoRoutingDId = md.MoRoutingDId","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_sfc_morouting_dept"},{"field":"Type","value":"View"}],"columns":[{"id":"column-403316","object_id":"column-403316","name":"MoDId","name_without_path":"MoDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403317","object_id":"column-403317","name":"MoRoutingId","name_without_path":"MoRoutingId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403318","object_id":"column-403318","name":"MoRoutingDId","name_without_path":"MoRoutingDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403319","object_id":"column-403319","name":"DeptCode","name_without_path":"DeptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403320","object_id":"column-403320","name":"PFId","name_without_path":"PFId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-403321","object_id":"column-403321","name":"PFDId","name_without_path":"PFDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};