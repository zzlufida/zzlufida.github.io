window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13199","name":"v_fc_refermoroutingdetaillist","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create VIEW v_fc_refermoroutingdetaillist\r\nAS\r\n--报工参照，报工依据为工序计划：取工序资料表体\r\nSELECT mo.moid,mod.modid,mo.mocode,mod.sortseq,t.Description as motypedesc,mod.invcode,i.cinvname,i.cinvstd,i.cinvaddcode,\r\n\tmod.molotcode,i.cengineerfigno,mod.qty,i.ccomunitcode,com.ccomunitname,mod.status,motype.description AS modescription,\r\n\tmod.free1,mod.free2,mod.free3,mod.free4,mod.free5,mod.free6,mod.free7,mod.free8,mod.free9,mod.free10,\r\n\tmod.SoCode,mod.SoSeq,\r\n\ti.cinvdefine1,i.cinvdefine2,i.cinvdefine3,i.cinvdefine4,i.cinvdefine5,i.cinvdefine6,i.cinvdefine7,i.cinvdefine8,\r\n\ti.cinvdefine9,i.cinvdefine10,i.cinvdefine11,i.cinvdefine12,i.cinvdefine13,i.cinvdefine14,i.cinvdefine15,i.cinvdefine16,\r\n\tmod.MdeptCode,dp.cdepname,\r\n\t-------------------订单工序资料\r\n\tmord.moroutingid,mord.moroutingdid,mord.opseq,op.opcode,mord.description AS opdescription,mord.subflag,\r\n\tmord.wcid,wc.wccode,wc.description as wcdescription,wc.deptcode as wcdepcode,mord.startdate,mord.duedate,mord.starttime,mord.duetime,\r\n\tmord.auxunitcode AS inopunitcode,c.ccomunitname AS inopunitname,\r\n\tmord.changerate AS inchangerate,mod.qty / mord.changerate AS inauxopqty,\r\n\tmord.balmachiningqty,mord.baldeclareqty,mord.balqualifiedqty,mord.balrefusedqty,mord.balscrapqty,\r\n\tnull as perworkht,mord.FirstFlag ,mord.LastFlag,mord.reportqty,\r\n\t-------------------工序派工资料,来源于工序资料相应派工资料取空值\r\n\tcast(null as decimal(30,10)) as moroutingshiftid,mord.shiftqty as shiftqty,\r\n\tcast(null as decimal(30,10)) as completedqty,cast(null as decimal(30,10)) as uncompletedqty,\r\n\tnull as eqid,null as ceqcode,null as ceqname,null as employcode,null as employname,\r\n\tnull as dutyclasscode,null as dutyclassname,\r\n\tnull as workshiftid,null as wscode,null as bcdescription,isnull(mod.qty,0)-isnull(mord.reportqty,0) as unreportqty, \r\n\t(case when mod.qty-mord.CompleteQty>0 then 1 else 0 end) as bscrap,\r\n\t---支持问题加派工单开完工日期---\r\n\tnull as shiftstartdate,null as shiftduedate    \r\n\t   \r\nFROM mom_order mo INNER JOIN mom_orderdetail mod ON mo.moid = mod.moid\r\n\tleft outer join mom_motype t on mod.MoTypeId = t.MoTypeId\r\n\tINNER JOIN sfc_morouting mor ON mor.modid = mod.modid\r\n\tINNER JOIN sfc_moroutingdetail mord ON mod.modid = mord.modid\r\n\tLEFT OUTER JOIN department dp ON mod.MdeptCode = dp.cdepcode\r\n\tLEFT OUTER JOIN mom_motype AS motype ON motype.motypeid = mod.motypeid\r\n\tLEFT OUTER JOIN inventory i ON mod.invcode = i.cinvcode\r\n\tLEFT OUTER JOIN computationunit com ON i.ccomunitcode = com.ccomunitcode\r\n\tLEFT OUTER JOIN sfc_workcenter wc ON mord.wcid = wc.wcid\r\n\tLEFT OUTER JOIN sfc_operation op ON op.operationid = mord.operationid\r\n\tLEFT OUTER JOIN computationunit c ON c.ccomunitcode = mord.auxunitcode\r\nWHERE  (mod.sfcflag = 1) AND (mod.status < 4) AND (mord.reportflag = 1) AND mord.subflag = 0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_fc_refermoroutingdetaillist"},{"field":"Type","value":"View"}],"columns":[{"id":"column-356873","object_id":"column-356873","name":"moid","name_without_path":"moid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356874","object_id":"column-356874","name":"modid","name_without_path":"modid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356875","object_id":"column-356875","name":"mocode","name_without_path":"mocode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356876","object_id":"column-356876","name":"sortseq","name_without_path":"sortseq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356877","object_id":"column-356877","name":"motypedesc","name_without_path":"motypedesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356878","object_id":"column-356878","name":"invcode","name_without_path":"invcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356879","object_id":"column-356879","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356880","object_id":"column-356880","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356881","object_id":"column-356881","name":"cinvaddcode","name_without_path":"cinvaddcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356882","object_id":"column-356882","name":"molotcode","name_without_path":"molotcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356883","object_id":"column-356883","name":"cengineerfigno","name_without_path":"cengineerfigno","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356884","object_id":"column-356884","name":"qty","name_without_path":"qty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356885","object_id":"column-356885","name":"ccomunitcode","name_without_path":"ccomunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356886","object_id":"column-356886","name":"ccomunitname","name_without_path":"ccomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356887","object_id":"column-356887","name":"status","name_without_path":"status","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356888","object_id":"column-356888","name":"modescription","name_without_path":"modescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356889","object_id":"column-356889","name":"free1","name_without_path":"free1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356890","object_id":"column-356890","name":"free2","name_without_path":"free2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356891","object_id":"column-356891","name":"free3","name_without_path":"free3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356892","object_id":"column-356892","name":"free4","name_without_path":"free4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356893","object_id":"column-356893","name":"free5","name_without_path":"free5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356894","object_id":"column-356894","name":"free6","name_without_path":"free6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356895","object_id":"column-356895","name":"free7","name_without_path":"free7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356896","object_id":"column-356896","name":"free8","name_without_path":"free8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356897","object_id":"column-356897","name":"free9","name_without_path":"free9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356898","object_id":"column-356898","name":"free10","name_without_path":"free10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356899","object_id":"column-356899","name":"SoCode","name_without_path":"SoCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356900","object_id":"column-356900","name":"SoSeq","name_without_path":"SoSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356901","object_id":"column-356901","name":"cinvdefine1","name_without_path":"cinvdefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356902","object_id":"column-356902","name":"cinvdefine2","name_without_path":"cinvdefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356903","object_id":"column-356903","name":"cinvdefine3","name_without_path":"cinvdefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356904","object_id":"column-356904","name":"cinvdefine4","name_without_path":"cinvdefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356905","object_id":"column-356905","name":"cinvdefine5","name_without_path":"cinvdefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356906","object_id":"column-356906","name":"cinvdefine6","name_without_path":"cinvdefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356907","object_id":"column-356907","name":"cinvdefine7","name_without_path":"cinvdefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356908","object_id":"column-356908","name":"cinvdefine8","name_without_path":"cinvdefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356909","object_id":"column-356909","name":"cinvdefine9","name_without_path":"cinvdefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356910","object_id":"column-356910","name":"cinvdefine10","name_without_path":"cinvdefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356911","object_id":"column-356911","name":"cinvdefine11","name_without_path":"cinvdefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356912","object_id":"column-356912","name":"cinvdefine12","name_without_path":"cinvdefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356913","object_id":"column-356913","name":"cinvdefine13","name_without_path":"cinvdefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356914","object_id":"column-356914","name":"cinvdefine14","name_without_path":"cinvdefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356915","object_id":"column-356915","name":"cinvdefine15","name_without_path":"cinvdefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356916","object_id":"column-356916","name":"cinvdefine16","name_without_path":"cinvdefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356917","object_id":"column-356917","name":"MdeptCode","name_without_path":"MdeptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356918","object_id":"column-356918","name":"cdepname","name_without_path":"cdepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356919","object_id":"column-356919","name":"moroutingid","name_without_path":"moroutingid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356920","object_id":"column-356920","name":"moroutingdid","name_without_path":"moroutingdid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356921","object_id":"column-356921","name":"opseq","name_without_path":"opseq","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356922","object_id":"column-356922","name":"opcode","name_without_path":"opcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356923","object_id":"column-356923","name":"opdescription","name_without_path":"opdescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356924","object_id":"column-356924","name":"subflag","name_without_path":"subflag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356925","object_id":"column-356925","name":"wcid","name_without_path":"wcid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356926","object_id":"column-356926","name":"wccode","name_without_path":"wccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356927","object_id":"column-356927","name":"wcdescription","name_without_path":"wcdescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356928","object_id":"column-356928","name":"wcdepcode","name_without_path":"wcdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356929","object_id":"column-356929","name":"startdate","name_without_path":"startdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356930","object_id":"column-356930","name":"duedate","name_without_path":"duedate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356931","object_id":"column-356931","name":"starttime","name_without_path":"starttime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356932","object_id":"column-356932","name":"duetime","name_without_path":"duetime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356933","object_id":"column-356933","name":"inopunitcode","name_without_path":"inopunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356934","object_id":"column-356934","name":"inopunitname","name_without_path":"inopunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356963","object_id":"column-356963","name":"inchangerate","name_without_path":"inchangerate","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_ChangeRate: decimal","data_length":"22, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356935","object_id":"column-356935","name":"inauxopqty","name_without_path":"inauxopqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356936","object_id":"column-356936","name":"balmachiningqty","name_without_path":"balmachiningqty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356937","object_id":"column-356937","name":"baldeclareqty","name_without_path":"baldeclareqty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356938","object_id":"column-356938","name":"balqualifiedqty","name_without_path":"balqualifiedqty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356939","object_id":"column-356939","name":"balrefusedqty","name_without_path":"balrefusedqty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356940","object_id":"column-356940","name":"balscrapqty","name_without_path":"balscrapqty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356941","object_id":"column-356941","name":"perworkht","name_without_path":"perworkht","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356942","object_id":"column-356942","name":"FirstFlag","name_without_path":"FirstFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356943","object_id":"column-356943","name":"LastFlag","name_without_path":"LastFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356944","object_id":"column-356944","name":"reportqty","name_without_path":"reportqty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356945","object_id":"column-356945","name":"moroutingshiftid","name_without_path":"moroutingshiftid","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356946","object_id":"column-356946","name":"shiftqty","name_without_path":"shiftqty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356947","object_id":"column-356947","name":"completedqty","name_without_path":"completedqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356948","object_id":"column-356948","name":"uncompletedqty","name_without_path":"uncompletedqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356949","object_id":"column-356949","name":"eqid","name_without_path":"eqid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356950","object_id":"column-356950","name":"ceqcode","name_without_path":"ceqcode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356951","object_id":"column-356951","name":"ceqname","name_without_path":"ceqname","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356952","object_id":"column-356952","name":"employcode","name_without_path":"employcode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356953","object_id":"column-356953","name":"employname","name_without_path":"employname","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356954","object_id":"column-356954","name":"dutyclasscode","name_without_path":"dutyclasscode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356955","object_id":"column-356955","name":"dutyclassname","name_without_path":"dutyclassname","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356956","object_id":"column-356956","name":"workshiftid","name_without_path":"workshiftid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356957","object_id":"column-356957","name":"wscode","name_without_path":"wscode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356958","object_id":"column-356958","name":"bcdescription","name_without_path":"bcdescription","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356959","object_id":"column-356959","name":"unreportqty","name_without_path":"unreportqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"29, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356960","object_id":"column-356960","name":"bscrap","name_without_path":"bscrap","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356961","object_id":"column-356961","name":"shiftstartdate","name_without_path":"shiftstartdate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-356962","object_id":"column-356962","name":"shiftduedate","name_without_path":"shiftduedate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};