window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12847","name":"v_ecn_EcnPro_List","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW v_ecn_EcnPro_List \r\nas\r\nselect distinct\r\n\tpro.DocId,doc.DocCode as DocCode,\r\n\tpro.ProCode,Pro.ProDate as ProDate,Pro.CreateUser as ProCreateUser,Pro.Status as ProStatus,Pro.RelsDate AS ProRelsDate,--U82021102500003\r\n\tpro.ProId,Relation.*,\r\n\ti.cinvaddcode as InvAddCode,i.cinvname as InvName,i.cinvstd as InvStd,\r\n\tInvDefine_1 = i.cInvDefine1,InvDefine_2 = i.cInvDefine2,InvDefine_3 = i.cInvDefine3,InvDefine_4 = i.cInvDefine4,InvDefine_5 = i.cInvDefine5,InvDefine_6 = i.cInvDefine6,InvDefine_7 = i.cInvDefine7,InvDefine_8 = i.cInvDefine8,\r\n\tInvDefine_9 = i.cInvDefine9,InvDefine_10 = i.cInvDefine10,InvDefine_11 = i.cInvDefine11,InvDefine_12 = i.cInvDefine12,InvDefine_13 = i.cInvDefine13,InvDefine_14 = i.cInvDefine14,InvDefine_15= i.cInvDefine15,InvDefine_16 = i.cInvDefine16,\r\n\tc.cComUnitName as InvUnitName,case when up.cuser_name is not null then up.cuser_name else Relation.ProcessPsn end as ProcessPsnName\t\r\nfrom hy_dz_ecnprocess pro \r\ninner join hy_dz_ecnmain doc on doc.id = pro.DocId\r\nleft outer join (\r\n\tselect d.ProId as RelationProId,RelationType =1 ,\r\n\t\td.mocode as Code,d.CreateDate as DDate,d.MoSeq as SortSeq,\r\n\t\td.invcode as InvCode,\r\n\t\td.Free1 as InvFree_1,d.Free2 as InvFree_2,d.Free3 as InvFree_3,d.Free4 as InvFree_4,d.Free5 as InvFree_5,   \r\n\t\td.Free6 as InvFree_6,d.Free7 as InvFree_7,d.Free8 as InvFree_8,d.Free9 as InvFree_9,d.Free10 as InvFree_10,\r\n\t\td.qty as Qty,r.ProcessStatus ,r.ProcessDate,r.Process,r.ProcessPsn,r.ProcessType,r.ReMark\r\n\tfrom hy_dz_ecnprocessdetails_scdd d\r\n\tinner join hy_dz_ecnprocess_report r on r.VoucherType = 1  and d.ProId = r.ProId and d.MoDId = r.VoucherId\r\n\tunion all\r\n\tselect d.ProId as RelationProId,RelationType =2 ,\r\n\t\td.omcode as Code,d.DDate,d.omSeq as SortSeq,\r\n\t\td.invcode as InvCode,\r\n\t\td.Free1 as InvFree_1,d.Free2 as InvFree_2,d.Free3 as InvFree_3,d.Free4 as InvFree_4,d.Free5 as InvFree_5,   \r\n\t\td.Free6 as InvFree_6,d.Free7 as InvFree_7,d.Free8 as InvFree_8,d.Free9 as InvFree_9,d.Free10 as InvFree_10,\r\n\t\td.qty as Qty,r.ProcessStatus ,r.ProcessDate,r.Process,r.ProcessPsn,r.ProcessType,r.ReMark\r\n\tfrom hy_dz_ecnprocessdetails_wwdd d\t\r\n\tinner join hy_dz_ecnprocess_report r on r.VoucherType = 2 and r.ProId = d.ProId and r.VoucherId = d.omdid\r\n\tunion all\r\n\tselect h.ProId as RelationProId,RelationType =3,\r\n\t\th.Code,h.DDate,b.SortSeq,\r\n\t\tb.invcode as InvCode,\r\n\t\tb.Free1 as InvFree_1,b.Free2 as InvFree_2,b.Free3 as InvFree_3,b.Free4 as InvFree_4,b.Free5 as InvFree_5,   \r\n\t\tb.Free6 as InvFree_6,b.Free7 as InvFree_7,b.Free8 as InvFree_8,b.Free9 as InvFree_9,b.Free10 as InvFree_10,\r\n\t\tb.Quantity as Qty,r.ProcessStatus ,r.ProcessDate,r.Process,r.ProcessPsn,r.ProcessType,r.ReMark\r\n\tfrom hy_dz_ecnprocessdetails_qgd h\r\n\tinner join hy_dz_qgd_detail b on h.id=b.id and h.ProRId = b.ProRId\r\n\tinner join hy_dz_ecnprocess_report r on r.VoucherType = 3 and r.ProId = h.ProId and r.VoucherId = h.Id\r\n\tunion all\r\n\tselect h.ProId as RelationProId,RelationType =4,\r\n\t\th.Code,h.DDate,b.SortSeq,\r\n\t\tb.invcode as InvCode,\r\n\t\tb.Free1 as InvFree_1,b.Free2 as InvFree_2,b.Free3 as InvFree_3,b.Free4 as InvFree_4,b.Free5 as InvFree_5,   \r\n\t\tb.Free6 as InvFree_6,b.Free7 as InvFree_7,b.Free8 as InvFree_8,b.Free9 as InvFree_9,b.Free10 as InvFree_10,\r\n\t\tb.Quantity as Qty,r.ProcessStatus ,r.ProcessDate,r.Process,r.ProcessPsn,r.ProcessType,r.ReMark\r\n\tfrom hy_dz_ecnprocessdetails_cgdd h\r\n\tinner join hy_dz_cgdd_detail b on h.id=b.id and h.ProRId = b.ProRId\r\n\tinner join hy_dz_ecnprocess_report r on r.VoucherType = 4 and r.ProId = h.ProId and r.VoucherId = h.Id\r\n) Relation on Relation.RelationProId = pro.ProId\r\nleft outer join Inventory i on i.cinvcode=Relation.Invcode\r\nleft outer join ComputationUnit c on c.cComunitCode = i.cComUnitCode\r\nleft outer join ua_user up on Relation.ProcessPsn = up.cuser_id","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ecn_EcnPro_List"},{"field":"Type","value":"View"}],"columns":[{"id":"column-322521","object_id":"column-322521","name":"DocId","name_without_path":"DocId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322522","object_id":"column-322522","name":"DocCode","name_without_path":"DocCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322523","object_id":"column-322523","name":"ProCode","name_without_path":"ProCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322524","object_id":"column-322524","name":"ProDate","name_without_path":"ProDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322525","object_id":"column-322525","name":"ProCreateUser","name_without_path":"ProCreateUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322526","object_id":"column-322526","name":"ProStatus","name_without_path":"ProStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322527","object_id":"column-322527","name":"ProRelsDate","name_without_path":"ProRelsDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322528","object_id":"column-322528","name":"ProId","name_without_path":"ProId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322529","object_id":"column-322529","name":"RelationProId","name_without_path":"RelationProId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322530","object_id":"column-322530","name":"RelationType","name_without_path":"RelationType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322531","object_id":"column-322531","name":"Code","name_without_path":"Code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322532","object_id":"column-322532","name":"DDate","name_without_path":"DDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322533","object_id":"column-322533","name":"SortSeq","name_without_path":"SortSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322534","object_id":"column-322534","name":"InvCode","name_without_path":"InvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322535","object_id":"column-322535","name":"InvFree_1","name_without_path":"InvFree_1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322536","object_id":"column-322536","name":"InvFree_2","name_without_path":"InvFree_2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322537","object_id":"column-322537","name":"InvFree_3","name_without_path":"InvFree_3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322538","object_id":"column-322538","name":"InvFree_4","name_without_path":"InvFree_4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322539","object_id":"column-322539","name":"InvFree_5","name_without_path":"InvFree_5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322540","object_id":"column-322540","name":"InvFree_6","name_without_path":"InvFree_6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322541","object_id":"column-322541","name":"InvFree_7","name_without_path":"InvFree_7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322542","object_id":"column-322542","name":"InvFree_8","name_without_path":"InvFree_8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322543","object_id":"column-322543","name":"InvFree_9","name_without_path":"InvFree_9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322544","object_id":"column-322544","name":"InvFree_10","name_without_path":"InvFree_10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322545","object_id":"column-322545","name":"Qty","name_without_path":"Qty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322546","object_id":"column-322546","name":"ProcessStatus","name_without_path":"ProcessStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322547","object_id":"column-322547","name":"ProcessDate","name_without_path":"ProcessDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322548","object_id":"column-322548","name":"Process","name_without_path":"Process","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322549","object_id":"column-322549","name":"ProcessPsn","name_without_path":"ProcessPsn","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322550","object_id":"column-322550","name":"ProcessType","name_without_path":"ProcessType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322551","object_id":"column-322551","name":"ReMark","name_without_path":"ReMark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322552","object_id":"column-322552","name":"InvAddCode","name_without_path":"InvAddCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322553","object_id":"column-322553","name":"InvName","name_without_path":"InvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322554","object_id":"column-322554","name":"InvStd","name_without_path":"InvStd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322555","object_id":"column-322555","name":"InvDefine_1","name_without_path":"InvDefine_1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322556","object_id":"column-322556","name":"InvDefine_2","name_without_path":"InvDefine_2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322557","object_id":"column-322557","name":"InvDefine_3","name_without_path":"InvDefine_3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322558","object_id":"column-322558","name":"InvDefine_4","name_without_path":"InvDefine_4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322559","object_id":"column-322559","name":"InvDefine_5","name_without_path":"InvDefine_5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322560","object_id":"column-322560","name":"InvDefine_6","name_without_path":"InvDefine_6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322561","object_id":"column-322561","name":"InvDefine_7","name_without_path":"InvDefine_7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322562","object_id":"column-322562","name":"InvDefine_8","name_without_path":"InvDefine_8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322563","object_id":"column-322563","name":"InvDefine_9","name_without_path":"InvDefine_9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322564","object_id":"column-322564","name":"InvDefine_10","name_without_path":"InvDefine_10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322565","object_id":"column-322565","name":"InvDefine_11","name_without_path":"InvDefine_11","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322566","object_id":"column-322566","name":"InvDefine_12","name_without_path":"InvDefine_12","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322567","object_id":"column-322567","name":"InvDefine_13","name_without_path":"InvDefine_13","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322568","object_id":"column-322568","name":"InvDefine_14","name_without_path":"InvDefine_14","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322569","object_id":"column-322569","name":"InvDefine_15","name_without_path":"InvDefine_15","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322570","object_id":"column-322570","name":"InvDefine_16","name_without_path":"InvDefine_16","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322571","object_id":"column-322571","name":"InvUnitName","name_without_path":"InvUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-322572","object_id":"column-322572","name":"ProcessPsnName","name_without_path":"ProcessPsnName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};