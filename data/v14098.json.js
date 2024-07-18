window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14098","name":"v_ZNZZ_BGBJHead","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create VIEW v_ZNZZ_BGBJHead\r\nAS\r\nselect s.cbsysbarcode,w.Description as wcdesc,i.cinvcode,i.cinvname,i.cinvstd,d.Description as opdesc,s.fquantity ,s.FQUANTITY as fregquantity,0 as fdisquantity,qc.cprojectcode,qc.cprojectname,s.autoid,q.id\r\n,qc.ccheckpersoncode,qc.ccheckpersonname,qc.cdepcode,qc.cdepname,si.qcprojectid\r\nfrom qminspectvoucher q inner join qminspectvouchers s on q.ID = s.ID and s.SOURCEAUTOID = q.CSOURCEID\r\ninner join fc_MoRoutingBilldetail f on f.TransformId = q.csourceid and q.csource ='工序转移单'\r\ninner join sfc_moroutingdetail d on d.MoRoutingDId = f.MoRoutingDId\r\ninner join sfc_workcenter w on w.WcId = d.WcId\r\ninner join mom_orderdetail md on md.MoDId = f.MoDId inner join Inventory i on i.cInvCode = md.InvCode\r\nleft outer join sfc_moroutinginsp si on si.MoRoutingDId = d.MoRoutingDId\r\nleft outer join QM_QCheckProjectB qc on qc.id = si.QcProjectId\r\nwhere md.status = 3  and q.CVOUCHTYPE = 'QM08' and isnull(q.CVERIFIER,'') = ''","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ZNZZ_BGBJHead"},{"field":"Type","value":"View"}],"columns":[{"id":"column-415241","object_id":"column-415241","name":"cbsysbarcode","name_without_path":"cbsysbarcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415242","object_id":"column-415242","name":"wcdesc","name_without_path":"wcdesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415243","object_id":"column-415243","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415244","object_id":"column-415244","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415245","object_id":"column-415245","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415246","object_id":"column-415246","name":"opdesc","name_without_path":"opdesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415247","object_id":"column-415247","name":"fquantity","name_without_path":"fquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415248","object_id":"column-415248","name":"fregquantity","name_without_path":"fregquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415249","object_id":"column-415249","name":"fdisquantity","name_without_path":"fdisquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415250","object_id":"column-415250","name":"cprojectcode","name_without_path":"cprojectcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415251","object_id":"column-415251","name":"cprojectname","name_without_path":"cprojectname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415252","object_id":"column-415252","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415253","object_id":"column-415253","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415254","object_id":"column-415254","name":"ccheckpersoncode","name_without_path":"ccheckpersoncode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415255","object_id":"column-415255","name":"ccheckpersonname","name_without_path":"ccheckpersonname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415256","object_id":"column-415256","name":"cdepcode","name_without_path":"cdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415257","object_id":"column-415257","name":"cdepname","name_without_path":"cdepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415258","object_id":"column-415258","name":"qcprojectid","name_without_path":"qcprojectid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};