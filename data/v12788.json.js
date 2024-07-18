window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12788","name":"V_CurrentStock_PE","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  VIEW V_CurrentStock_PE      \r\nAS      \r\n select C.AutoID,C.cWhCode,C.cInvCode,C.iQuantity,C.iNum,C.cFree1,C.cFree2,C.fOutQuantity,C.fOutNum,C.fInQuantity,C.fInNum,C.cFree3,C.cFree4,C.cFree5,C.cFree6,C.cFree7,C.cFree8,C.cFree9,C.cFree10,C.cBatch,C.dVDate,C.bStopFlag,C.fTransInQuantity,    \r\nC.dMdate,C.fTransInNum,C.fTransOutQuantity,C.fTransOutNum,C.fPlanQuantity,C.fPlanNum,C.fDisableQuantity,C.fDisableNum,C.fAvaQuantity,C.fAvaNum,C.ufts,C.iMassDate,C.BGSPSTOP,C.cMassUnit,C.fStopQuantity,C.fStopNum,C.dLastCheckDate,C.cCheckState, \r\nc.ipeqty,c.ipenum, \r\nC.dLastYearCheckDate,  isnull(c.isotype,0) as isotype,  \r\nC.cvmivencode,isnull(C.iSodid,'') as isodid,       \r\n enumname, (case when c.isotype=1 then so_sodetails.csocode     \r\n               when c.isotype=3 then ex_order.ccode     \r\n                        when isnull(c.isotype,0)=0 then null else c.isodid end  ) as csocode,    \r\n       (case when c.isotype=1 then so_sodetails.irowno     \r\n             when c.isotype=3 then ex_orderdetail.irowno else null end ) as isoseq,    \r\n       (case when c.isotype = 4  then AA.cRClassName else '' end) as cdemandmemo    \r\nfrom currentstock C Inner Join Inventory I on C.cinvcode=I.cinvcode \r\n                    left join  v_aa_enum on enumcode=(case when isnull(I.cSRPolicy,'')='LP' and isnull(i.bspecialorder,0)=1 then C.iSotype  else  0  end)  and enumtype=N'ST.Sotype'      \r\n      left join so_sodetails ON c.isotype=1 and case when c.isotype<>1 then '0' else  c.isodid end  =so_sodetails.isosid\r\n      left join ex_orderdetail on c.isotype=3 and case when  c.isotype<>3 then '0' else  c.isodid end =ex_orderdetail.autoid \r\n      left join ex_order on ex_orderdetail.id=ex_order.id    \r\n      left join AA_RequirementClass AA on AA.cRClassCode = C.isodid and c.isotype =4","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_CurrentStock_PE"},{"field":"Type","value":"View"}],"columns":[{"id":"column-319551","object_id":"column-319551","name":"AutoID","name_without_path":"AutoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319552","object_id":"column-319552","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319553","object_id":"column-319553","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319554","object_id":"column-319554","name":"iQuantity","name_without_path":"iQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319555","object_id":"column-319555","name":"iNum","name_without_path":"iNum","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319556","object_id":"column-319556","name":"cFree1","name_without_path":"cFree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319557","object_id":"column-319557","name":"cFree2","name_without_path":"cFree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319558","object_id":"column-319558","name":"fOutQuantity","name_without_path":"fOutQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319559","object_id":"column-319559","name":"fOutNum","name_without_path":"fOutNum","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319560","object_id":"column-319560","name":"fInQuantity","name_without_path":"fInQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319561","object_id":"column-319561","name":"fInNum","name_without_path":"fInNum","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319562","object_id":"column-319562","name":"cFree3","name_without_path":"cFree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319563","object_id":"column-319563","name":"cFree4","name_without_path":"cFree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319564","object_id":"column-319564","name":"cFree5","name_without_path":"cFree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319565","object_id":"column-319565","name":"cFree6","name_without_path":"cFree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319566","object_id":"column-319566","name":"cFree7","name_without_path":"cFree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319567","object_id":"column-319567","name":"cFree8","name_without_path":"cFree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319568","object_id":"column-319568","name":"cFree9","name_without_path":"cFree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319569","object_id":"column-319569","name":"cFree10","name_without_path":"cFree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319570","object_id":"column-319570","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319571","object_id":"column-319571","name":"dVDate","name_without_path":"dVDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319572","object_id":"column-319572","name":"bStopFlag","name_without_path":"bStopFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319573","object_id":"column-319573","name":"fTransInQuantity","name_without_path":"fTransInQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319574","object_id":"column-319574","name":"dMdate","name_without_path":"dMdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319575","object_id":"column-319575","name":"fTransInNum","name_without_path":"fTransInNum","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319576","object_id":"column-319576","name":"fTransOutQuantity","name_without_path":"fTransOutQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319577","object_id":"column-319577","name":"fTransOutNum","name_without_path":"fTransOutNum","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319578","object_id":"column-319578","name":"fPlanQuantity","name_without_path":"fPlanQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319579","object_id":"column-319579","name":"fPlanNum","name_without_path":"fPlanNum","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319580","object_id":"column-319580","name":"fDisableQuantity","name_without_path":"fDisableQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319581","object_id":"column-319581","name":"fDisableNum","name_without_path":"fDisableNum","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319582","object_id":"column-319582","name":"fAvaQuantity","name_without_path":"fAvaQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319583","object_id":"column-319583","name":"fAvaNum","name_without_path":"fAvaNum","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319584","object_id":"column-319584","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319585","object_id":"column-319585","name":"iMassDate","name_without_path":"iMassDate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319586","object_id":"column-319586","name":"BGSPSTOP","name_without_path":"BGSPSTOP","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319587","object_id":"column-319587","name":"cMassUnit","name_without_path":"cMassUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319588","object_id":"column-319588","name":"fStopQuantity","name_without_path":"fStopQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319589","object_id":"column-319589","name":"fStopNum","name_without_path":"fStopNum","description":null,"is_pk":false,"is_identity":false,"data_type":"UDT_LogisticQuantity: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319590","object_id":"column-319590","name":"dLastCheckDate","name_without_path":"dLastCheckDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319591","object_id":"column-319591","name":"cCheckState","name_without_path":"cCheckState","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319592","object_id":"column-319592","name":"ipeqty","name_without_path":"ipeqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319593","object_id":"column-319593","name":"ipenum","name_without_path":"ipenum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319594","object_id":"column-319594","name":"dLastYearCheckDate","name_without_path":"dLastYearCheckDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319595","object_id":"column-319595","name":"isotype","name_without_path":"isotype","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319596","object_id":"column-319596","name":"cvmivencode","name_without_path":"cvmivencode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319597","object_id":"column-319597","name":"isodid","name_without_path":"isodid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319598","object_id":"column-319598","name":"enumname","name_without_path":"enumname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319599","object_id":"column-319599","name":"csocode","name_without_path":"csocode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319600","object_id":"column-319600","name":"isoseq","name_without_path":"isoseq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319601","object_id":"column-319601","name":"cdemandmemo","name_without_path":"cdemandmemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};