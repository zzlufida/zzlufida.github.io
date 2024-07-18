window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13905","name":"v_sfc_qmgxjyd_link","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_sfc_qmgxjyd_link\r\nas \r\nselect distinct 'QM020302' as cmenuid,h.MoDId,s.Id as AutoId,s.Id as Id,s.iproorderautoid,s.CCHECKTYPECODE,s.sourceid\r\n,s.ccheckcode as ccode,s.ddate,s.cmaker,s.cverifier,s.dverifydate\r\n,s.cdepcode,null as cpersoncode,s.cvencode,null as cwhcode\r\n,dd.cdepname,null as cpersonname,vv.cvenabbname, null as cwhname\r\n,s.csource as cbustype,null as csourcevouchtype, null as cptname,null as crdname\r\n,s.cDefine1,s.cDefine2,s.cDefine3,s.cDefine4,s.cDefine5,s.cDefine6,s.cDefine7,s.cDefine8\r\n,s.cDefine9,s.cDefine10,s.cDefine11,s.cDefine12,s.cDefine13,s.cDefine14,s.cDefine15,s.cDefine16\r\nfrom mom_orderdetail h inner join qmcheckvoucher s on h.MoDId = s.iproorderautoid \r\n--left join qmcheckvouchers d on s.Id = d.Id\r\nleft join department dd on s.cdepcode = dd.cdepcode\r\n--left join person pp on s.cpersoncode = pp.cpersoncode\r\nleft join vendor vv on s.cvencode = vv.cvencode\r\nwhere s.cvouchtype = 'QM12' --'QM04' 产品检验单\r\nunion\r\nselect distinct 'QM020302' as cmenuid,h.MoDId,s.Id as AutoId,s.Id as Id,s.iproorderautoid,s.CCHECKTYPECODE,s.sourceid\r\n,s.ccheckcode as ccode,s.ddate,s.cmaker,s.cverifier,s.dverifydate\r\n,s.cdepcode,null as cpersoncode,s.cvencode,null as cwhcode\r\n,dd.cdepname,null as cpersonname,vv.cvenabbname, null as cwhname\r\n,s.csource as cbustype,null as csourcevouchtype, null as cptname,null as crdname\r\n,s.cDefine1,s.cDefine2,s.cDefine3,s.cDefine4,s.cDefine5,s.cDefine6,s.cDefine7,s.cDefine8\r\n,s.cDefine9,s.cDefine10,s.cDefine11,s.cDefine12,s.cDefine13,s.cDefine14,s.cDefine15,s.cDefine16\r\nfrom sfc_morouting h inner join sfc_moroutingdetail smd on smd.moroutingid = h.moroutingid\r\ninner join hy_receivedetail hy on smd.moroutingdid = hy.iMoRoutingDId and hy.CSOURCE=1\r\ninner join qmcheckvoucher s on hy.receiveDId = s.SOURCEAUTOID and s.csource ='工序委外收料单'\r\nleft join department dd on s.cdepcode = dd.cdepcode\r\n--left join person pp on s.cpersoncode = pp.cpersoncode\r\nleft join vendor vv on s.cvencode = vv.cvencode\r\nwhere s.cvouchtype = 'QM12' --'QM04' 产品检验单\r\nunion\r\nselect distinct 'QM020302' as cmenuid,h.MoDId,s.Id as AutoId,s.Id as Id,s.iproorderautoid,s.CCHECKTYPECODE,s.sourceid\r\n,s.ccheckcode as ccode,s.ddate,s.cmaker,s.cverifier,s.dverifydate\r\n,s.cdepcode,null as cpersoncode,s.cvencode,null as cwhcode\r\n,dd.cdepname,null as cpersonname,vv.cvenabbname, null as cwhname\r\n,s.csource as cbustype,null as csourcevouchtype, null as cptname,null as crdname\r\n,s.cDefine1,s.cDefine2,s.cDefine3,s.cDefine4,s.cDefine5,s.cDefine6,s.cDefine7,s.cDefine8\r\n,s.cDefine9,s.cDefine10,s.cDefine11,s.cDefine12,s.cDefine13,s.cDefine14,s.cDefine15,s.cDefine16\r\nfrom sfc_morouting h inner join sfc_moroutingdetail smd on smd.moroutingid = h.moroutingid\r\ninner join sfc_processflowdetail pd on pd.moroutingdid = smd.moroutingdid\r\ninner join hy_receivedetail hy on pd.pfdid = hy.iMoRoutingDId and hy.CSOURCE=2\r\ninner join qmcheckvoucher s on hy.receiveDId = s.SOURCEAUTOID and s.csource ='工序委外收料单'\r\nleft join department dd on s.cdepcode = dd.cdepcode\r\n--left join person pp on s.cpersoncode = pp.cpersoncode\r\nleft join vendor vv on s.cvencode = vv.cvencode\r\nwhere s.cvouchtype = 'QM12' --'QM04' 产品检验单","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_sfc_qmgxjyd_link"},{"field":"Type","value":"View"}],"columns":[{"id":"column-406281","object_id":"column-406281","name":"cmenuid","name_without_path":"cmenuid","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406282","object_id":"column-406282","name":"MoDId","name_without_path":"MoDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406283","object_id":"column-406283","name":"AutoId","name_without_path":"AutoId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406284","object_id":"column-406284","name":"Id","name_without_path":"Id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406285","object_id":"column-406285","name":"iproorderautoid","name_without_path":"iproorderautoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406286","object_id":"column-406286","name":"CCHECKTYPECODE","name_without_path":"CCHECKTYPECODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406287","object_id":"column-406287","name":"sourceid","name_without_path":"sourceid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406288","object_id":"column-406288","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406289","object_id":"column-406289","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406290","object_id":"column-406290","name":"cmaker","name_without_path":"cmaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406291","object_id":"column-406291","name":"cverifier","name_without_path":"cverifier","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406292","object_id":"column-406292","name":"dverifydate","name_without_path":"dverifydate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406293","object_id":"column-406293","name":"cdepcode","name_without_path":"cdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406294","object_id":"column-406294","name":"cpersoncode","name_without_path":"cpersoncode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406295","object_id":"column-406295","name":"cvencode","name_without_path":"cvencode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406296","object_id":"column-406296","name":"cwhcode","name_without_path":"cwhcode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406297","object_id":"column-406297","name":"cdepname","name_without_path":"cdepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406298","object_id":"column-406298","name":"cpersonname","name_without_path":"cpersonname","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406299","object_id":"column-406299","name":"cvenabbname","name_without_path":"cvenabbname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406300","object_id":"column-406300","name":"cwhname","name_without_path":"cwhname","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406301","object_id":"column-406301","name":"cbustype","name_without_path":"cbustype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406302","object_id":"column-406302","name":"csourcevouchtype","name_without_path":"csourcevouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406303","object_id":"column-406303","name":"cptname","name_without_path":"cptname","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406304","object_id":"column-406304","name":"crdname","name_without_path":"crdname","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406305","object_id":"column-406305","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406306","object_id":"column-406306","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406307","object_id":"column-406307","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406308","object_id":"column-406308","name":"cDefine4","name_without_path":"cDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406309","object_id":"column-406309","name":"cDefine5","name_without_path":"cDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406310","object_id":"column-406310","name":"cDefine6","name_without_path":"cDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406311","object_id":"column-406311","name":"cDefine7","name_without_path":"cDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406312","object_id":"column-406312","name":"cDefine8","name_without_path":"cDefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406313","object_id":"column-406313","name":"cDefine9","name_without_path":"cDefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406314","object_id":"column-406314","name":"cDefine10","name_without_path":"cDefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406315","object_id":"column-406315","name":"cDefine11","name_without_path":"cDefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406316","object_id":"column-406316","name":"cDefine12","name_without_path":"cDefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406317","object_id":"column-406317","name":"cDefine13","name_without_path":"cDefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406318","object_id":"column-406318","name":"cDefine14","name_without_path":"cDefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406319","object_id":"column-406319","name":"cDefine15","name_without_path":"cDefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406320","object_id":"column-406320","name":"cDefine16","name_without_path":"cDefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};